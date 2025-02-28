import express from "express";
import Blog from "../models/blog.js";
import multer from "multer";
import { uploadFile } from "../uploadFIle.js";
import fs from "fs";
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
