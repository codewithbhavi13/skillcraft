import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import courseRouter from "./routes/courseRouter.js";
import tutorialsRouter from "./routes/tutorialRoutor.js";
import dotenv from "dotenv";
dotenv.config();
import authrouter from "./routes/auth.js";
import { authUser } from "./middlewares/authUser.js";
import progressRouter from "./routes/progressRouter.js";
import userPreferences from "./routes/userPreferences.js";
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/skillcraft", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

//Router Declaration
app.use("/api/courses", courseRouter);
app.use("/api/tutorials", tutorialsRouter);
app.use("/api/progress", authUser, progressRouter);
app.use("/api/user-preferences", authUser, userPreferences);

app.get("/", (req, res) => {
  res.json({ msg: "Hello world" });
});

app.use("/api/auth", authrouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
