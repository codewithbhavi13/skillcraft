import express from "express";
import Blog from "../models/blog.js";
import multer from "multer";
import { uploadFile } from "../uploadFIle.js";
import fs from "fs";
import mongoose from "mongoose";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".png");
  },
});
const upload = multer({ storage: storage });

const blogRouter = express.Router();

// Get all blogs
blogRouter.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new blog
blogRouter.post("/", upload.single("image"), async (req, res) => {
  const { title, content } = JSON.parse(req.body.jsonData);
  console.log(req.body);
  if (!title || !content)
    return res.status(400).json({ msg: "All fields are required" });

  const filePath = req.file.destination + req.file.filename;
  const fileBuffer = fs.readFileSync(filePath);
  let data = await uploadFile(fileBuffer, req.file.filename);
  console.log("Url Data", data);
  const newBlog = new Blog({ title, image: data, content });

  try {
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

blogRouter.post("/comment", async (req, res) => {
  const { id } = req.user;
  const { blogid, username, message } = req.body;
  try {
    const blog = await Blog.findByIdAndUpdate(
      blogid,
      {
        $push: {
          comments: {
            userId: id,
            username,
            message,
          },
        },
      },
      { new: true }
    );
    if (!blog) {
      return res.status(400).json({ msg: "something went wrong" });
    }
    res.status(200).json({ msg: "Success", done: true, blog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
});
blogRouter.put("/comment", async (req, res) => {
  try {
    const { id } = req.user;
    const { commentId, blogId, message } = req.body;
    const blog = await Blog.findById(blogId, { comments: 1 });
    const comment = blog.comments.find(
      (comment) => comment._id.toString() === commentId
    );
    if (comment.userId.toString() !== id.toString()) {
      return res.status(403).json({ msg: "This is not your comment" });
    }
    const updatedBlog = await Blog.findOneAndUpdate(
      { _id: blogId, "comments._id": commentId },
      {
        $set: {
          "comments.$.message": message,
        },
      },
      { new: true }
    );

    res.status(200).json({ msg: "Sucess", done: true, blog: updatedBlog });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});
blogRouter.delete("/comment", async (req, res) => {
  try {
    const { id } = req.user;
    const { commentId, blogId } = req.body;
    const blog = await Blog.findById(blogId, { comments: 1 });
    const comment = blog.comments.find(
      (comment) => comment._id.toString() === commentId
    );

    if (comment.userId.toString() !== id.toString()) {
      return res.status(403).json({ msg: "This is not your comment" });
    }
    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: {
          comments: { _id: commentId },
        },
      },
      { new: true }
    );

    res.status(200).json({ msg: "Sucess", done: true, blog: updatedBlog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
});

blogRouter.post("/like", async (req, res) => {
  const { id } = req.user;
  const { blogId } = req.body;
  try {
    const blog = await Blog.findById(blogId, { likes: 1 });
    if (!blog) {
      return res.status(404).json({ msg: "Blog not found" });
    }
    const alreadyLiked = blog.likes.includes(id); // Check if user has already liked
    let updatedBlog;
    if (alreadyLiked) {
      // If already liked, remove the like
      updatedBlog = await Blog.findByIdAndUpdate(
        blogId,
        { $pull: { likes: id } },
        { new: true }
      );
    } else {
      // If not liked, add the like
      updatedBlog = await Blog.findByIdAndUpdate(
        blogId,
        { $addToSet: { likes: id } },
        { new: true }
      );
    }

    res.status(200).json({ msg: "Success", done: true, blog: updatedBlog });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// Get a single blog by ID
blogRouter.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default blogRouter;
