import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from "dotenv";
dotenv.config();

const authrouter = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// Register Route
authrouter.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ msg: "User already exists" });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    let user_json = newUser.toJSON();
    const authtoken = jwt.sign(
      {
        user: {
          id: user_json._id,
        },
      },
      JWT_SECRET
    );
    user_json.authtoken = authtoken;
    res
      .status(201)
      .json({ msg: "User registered successfully", user: user_json });
    //TODO: remove password if it is there in newUser object
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Login Route
authrouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    let user_json = user.toJSON();

    // Generate JWT token

    console.log(JWT_SECRET);
    const authtoken = jwt.sign(
      {
        user: {
          id: user_json._id,
        },
      },
      JWT_SECRET
    );

    user_json.authtoken = authtoken;
    res.json({ msg: "Login Successfull", user: user_json });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default authrouter;
