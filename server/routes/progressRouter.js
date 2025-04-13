import { Router } from "express";
import { User } from "../models/user.js";
import { allTutorials } from "../content/content.js";

const progressRouter = Router();

progressRouter.patch("/enroll-tutorial", async (req, res) => {
  const { id } = req.user;
  const { title, noOfChapters } = req.body;
  const tutorial = allTutorials.find((item) => item.title === title);
  const firstChapter = tutorial.chapters[0];
  const startChapter = {
    name: firstChapter.name,
    noOfTopics: firstChapter.topics.length,
    topics: [firstChapter.topics[0].name],
  };
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $push: {
          enrolledTutorials: {
            title,
            noOfChapters,
            startedChapters: [startChapter],
          },
        },
      },
      { new: true }
    );

    res.status(200).json({
      msg: "Enrolled Successfully",
      enrolledTutorial: updatedUser.enrolledTutorials.find(
        (item) => item.title === title
      ),
    });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
});

progressRouter.patch("/start-chapter", async (req, res) => {
  const { id } = req.user; // Get user ID
  const { tutorialName, chapterName } = req.body;
  const tutorial = allTutorials.find((item) => item.title === tutorialName);
  const chapter = tutorial.chapters.find((item) => item.name === chapterName);
  const startChapter = {
    name: chapterName,
    noOfTopics: chapter.topics.length,
    topics: [chapter.topics[0].name],
  };
  try {
    // Find the user and update the enrolledTutorials array
    const updatedUser = await User.findOneAndUpdate(
      {
        _id: id,
        "enrolledTutorials.title": tutorialName,
      },
      {
        $push: {
          "enrolledTutorials.$.startedChapters": startChapter,
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ msg: "User or tutorial not found" });
    }

    res.status(200).json({
      msg: "Chapter started successfully",
      updatedTutorial: updatedUser.enrolledTutorials.find(
        (t) => t.title === tutorialName
      ),
    });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
});

progressRouter.patch("/complete-topic", async (req, res) => {
  const { id } = req.user; // Get user ID
  const { tutorialName, chapterName, topicName } = req.body;

  try {
    let updatedUser = await User.findOneAndUpdate(
      {
        _id: id,
        "enrolledTutorials.title": tutorialName,
        "enrolledTutorials.startedChapters.name": chapterName, // Ensure chapter exists
      },
      {
        $addToSet: {
          "enrolledTutorials.$[t].startedChapters.$[c].topics": topicName, // Add topic only if not present
        },
      },
      {
        arrayFilters: [{ "t.title": tutorialName }, { "c.name": chapterName }],
        new: true,
      }
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ msg: "User, tutorial, or chapter not found" });
    }

    // Find the updated tutorial and chapter
    const tutorial = updatedUser.enrolledTutorials.find(
      (t) => t.title === tutorialName
    );
    const chapter = tutorial?.startedChapters.find(
      (c) => c.name === chapterName
    );

    if (!chapter) {
      return res.status(404).json({ msg: "Chapter not found" });
    }

    // Check if all topics are completed
    if (chapter.topics.length === chapter.noOfTopics) {
      // Update isCompleted to true
      updatedUser = await User.findOneAndUpdate(
        {
          _id: id,
          "enrolledTutorials.title": tutorialName,
          "enrolledTutorials.startedChapters.name": chapterName,
        },
        {
          $set: {
            "enrolledTutorials.$[t].startedChapters.$[c].isCompleted": true,
          },
        },
        {
          arrayFilters: [
            { "t.title": tutorialName },
            { "c.name": chapterName },
          ],
          new: true,
        }
      );
    }

    res.status(200).json({
      msg: "Topic added successfully",
      updatedTutorial: updatedUser.enrolledTutorials.find(
        (t) => t.title === tutorialName
      ),
    });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error });
  }
});

progressRouter.patch("/save-quiz-score", async (req, res) => {
  try {
    const { id } = req.user;
    const { tutorialName, result } = req.body;
    const updatedUser = await User.findOneAndUpdate(
      {
        _id: id,
        "enrolledTutorials.title": tutorialName,
      },
      {
        $set: { "enrolledTutorials.$.result": result },
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ msg: "Tutorial not found for user." });
    }
    console.log(updatedUser);
    return res.status(200).json({
      msg: "Score Saved Successfully",
      updatedTutorial: updatedUser.enrolledTutorials.find(
        (t) => t.title === tutorialName
      ),
    });
  } catch (err) {
    return res.status(500).json({ msg: "Server Error", error: err.message });
  }
});

export default progressRouter;
