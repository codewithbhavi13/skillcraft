import express from "express";
import Course from "../models/course.js"; // Ensure '.js' extension is used
import CourseGrid from "../../frontend/src/Component/CourseGrid.jsx";

const router = express.Router();

// Route to add a new course
router.post("/add", async (req, res) => {
  try {
    const { title, image, description, category } = req.body;

    // Create a new course instance
    const newCourse = new Course({ title, image, description, category });

    // Save the new course to the database
    await newCourse.save();

    // Send success response
    res.status(201).json({ message: "Course added successfully", course: newCourse });
  } catch (err) {
    // Handle any errors during the save operation
    console.error(err);
    res.status(500).json({ message: "Error adding course", error: err });
  }
});



export default router;
