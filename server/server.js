import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import courseRouter from "./routes/courseRouter.js";
import tutorialsRouter from "./routes/tutorialRoutor.js";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import { fileURLToPath } from "url";
import authrouter from "./routes/auth.js";
import { authUser } from "./middlewares/authUser.js";
import progressRouter from "./routes/progressRouter.js";
import userPreferences from "./routes/userPreferences.js";
import blogRouter from "./routes/blogRouter.js";
import chatBotRouter from "./routes/chatbotRouter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.static(path.join(__dirname, "views")));

// Route to serve index.html from views folder
app.get("/admin-signup", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "adminsignup.html"));
});

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
app.use("/api/progress", authUser, progressRouter);
app.use("/api/user-preferences", authUser, userPreferences);
app.use("/api/blog", authUser, blogRouter);
app.use("/api/chatbot", chatBotRouter);

app.get("/", (req, res) => {
  res.json({ msg: "Hello world" });
});

app.use("/api/auth", authrouter);

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
