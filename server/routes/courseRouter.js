import express from "express";
import { allCourses } from "../content/content.js";
import { authUser } from "../middlewares/authUser.js";

const courseRouter = express.Router();

courseRouter.get("/", async (req, res) => {
  res.status(200).json({ courses: allCourses });
});

courseRouter.post("/like", authUser, async (req, res) => {
  const { id } = req.user;
});

export default courseRouter;
