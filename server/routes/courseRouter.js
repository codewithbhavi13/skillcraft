import express from "express";
import { allCourses } from "../content/content.js";

const courseRouter = express.Router();

courseRouter.get("/", async (req, res) => {
  res.status(200).json({ courses: allCourses });
});

export default courseRouter;
