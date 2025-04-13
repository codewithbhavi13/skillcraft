import { Router } from "express";
import User from "../models/user.js";

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

export default userPreferences;
