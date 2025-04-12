import express from "express";
// import Tutorial from "../models/tutorial.js";
import { tutorials } from "../AI_EngineerCourse.js";

const tutorialsRouter = express.Router();

// 1️⃣ Create a new tutorial
tutorialsRouter.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    const newTutorial = new Tutorial({ title, content });
    await newTutorial.save();
    res
      .status(201)
      .json({ message: "Tutorial created", tutorial: newTutorial });
  } catch (error) {
    res.status(500).json({ error: "Error creating tutorial" });
  }
});

// 2️⃣ Get all tutorials
tutorialsRouter.get("/", async (req, res) => {
  // termprorary code
  const allTutorials = [
    ...tutorials,
    {
      category: "Web Development",
      description: "understand the basic of html with proper symantics",
      thumbnail: "",
      title: "Basics of HTML",
      chapters: [],
    },
  ];
  // termprorary code

  try {
    res.status(200).json({ tutorials: allTutorials });
  } catch (error) {
    res.status(500).json({ error: "Error fetching tutorials" });
  }
});

// 3️⃣ Save/Unsave a tutorial
tutorialsRouter.post("/:id/save", async (req, res) => {
  try {
    const tutorial = await Tutorial.findById(req.params.id);
    if (!tutorial) return res.status(404).json({ error: "Tutorial not found" });

    const userId = req.body.userId;
    if (!tutorial.savedBy.includes(userId)) {
      tutorial.savedBy.push(userId);
    } else {
      tutorial.savedBy = tutorial.savedBy.filter((id) => id !== userId);
    }

    await tutorial.save();
    res.json({ message: "Saved status updated" });
  } catch (error) {
    res.status(500).json({ error: "Error saving tutorial" });
  }
});

// 4️⃣ Add a comment
tutorialsRouter.post("/:id/comment", async (req, res) => {
  try {
    const { user, text } = req.body;
    const tutorial = await Tutorial.findById(req.params.id);

    if (!tutorial) return res.status(404).json({ error: "Tutorial not found" });

    tutorial.comments.push({ user, text });
    await tutorial.save();

    res.json({ message: "Comment added" });
  } catch (error) {
    res.status(500).json({ error: "Error adding comment" });
  }
});

// 5️⃣ Rate a tutorial
tutorialsRouter.post("/:id/rate", async (req, res) => {
  try {
    const { user, rating } = req.body;
    const tutorial = await Tutorial.findById(req.params.id);

    if (!tutorial) return res.status(404).json({ error: "Tutorial not found" });

    const existingRating = tutorial.ratings.find((r) => r.user === user);
    if (existingRating) {
      existingRating.rating = rating;
    } else {
      tutorial.ratings.push({ user, rating });
    }

    await tutorial.save();
    res.json({ message: "Rating submitted" });
  } catch (error) {
    res.status(500).json({ error: "Error rating tutorial" });
  }
});

export default tutorialsRouter;
