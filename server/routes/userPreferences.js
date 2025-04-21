import { Router } from "express";
import User from "../models/user.js";
import Feedback from "../models/feedback.js";

const userPreferences = Router();

userPreferences.put("/select-career", async (req, res) => {
  const { selectedCareer } = req.body;
  const { id } = req.user;
  try {
    await User.findByIdAndUpdate(id, {
      $set: { selectedCareer },
    });
    return res.status(204).send("ok");
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

userPreferences.get("/feedback", async (req, res) => {
  try {
    const { role } = req.user;
    if (role !== "admin")
      return res
        .status(403)
        .json({ msg: "Your Not Authorized for this Resource" });

    const feedbacks = await Feedback.find({});
    res.status(200).json({ feedbacks });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

userPreferences.post("/feedback", async (req, res) => {
  try {
    const { id } = req.user;
    const { message, email, username, rating } = req.body;
    const newFeedback = new Feedback({
      email,
      username,
      userId: id,
      rating,
      message,
    });
    const response = await newFeedback.save();
    if (!response) return res.status(500).json({ msg: "Something went wrong" });
    res.status(201).json({ msg: "Thank you for your valuable feedback!" });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

export default userPreferences;
