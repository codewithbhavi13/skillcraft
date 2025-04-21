import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    username: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  content: { type: String, required: true },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  comments: {
    type: [CommentSchema],
    default: [],
  },
});

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;
