import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import courseRouter from "./routes/courseRouter.js";
import tutorialsRouter from "./routes/tutorialRoutor.js";
import dotenv from "dotenv";
dotenv.config();
import authrouter from "./routes/auth.js";
import blogRouter from "./routes/blogRouter.js";
//import blogRoutes from "./routes/blogRouter.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));
// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Exit if connection fails
  });

// Course Schema
const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
});

const Course = mongoose.model("Course", courseSchema);

app.post("/", async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content)
    return res.status(400).json({ message: "All fields are required" });

  const newBlog = new Blog({ title, content });

  try {
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Course POST Route
app.post("/api/courses", async (req, res) => {
  const { title, image, description, category } = req.body;
  try {
    const newCourse = new Course({ title, image, description, category });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving course" });
  }
});

// app.get("/api/courses", async (req, res) => {
//   const courses = await Course.find();

//   res.status(200).json({ courses });
// });

app.use("/api/courses", courseRouter);
app.use("/api/tutorials", tutorialsRouter);
app.use("/api/blog", blogRouter);

app.get("/", (req, res) => {
  res.json({ msg: "Hello world" });
});

app.use("/api/auth", authrouter);
// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
