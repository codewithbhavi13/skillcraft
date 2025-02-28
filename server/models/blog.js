import { kStringMaxLength } from "buffer";
import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { _id: 0, timestamps: true }
);

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  content: { type: String, required: true },
  comments: {
    type: [CommentSchema],
    default: [],
  },
});

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;
