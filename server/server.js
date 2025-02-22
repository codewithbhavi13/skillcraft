import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import signuprouter from "./routes/auth.js"
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/skillcraft", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Course Schema
const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
});

const Course = mongoose.model("Course", courseSchema);

// Course POST Route
app.post("/api/courses", async (req, res) => {
  const { title, image, description, category } = req.body;

  try {
    // Create a new course
    const newCourse = new Course({ title, image, description, category });
    await newCourse.save();

    // Respond with the saved course data
    res.status(201).json(newCourse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error saving course" });
  }
});

app.get("/api/courses", async (req, res) => {
  const courses = await Course.find()
  console.log(courses)
  res.status(200).json({courses})
})

app.get("/", (req, res) => {
  res.json({msg:"Hello world"})
})  

app.use("/api/auth",signuprouter)
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
