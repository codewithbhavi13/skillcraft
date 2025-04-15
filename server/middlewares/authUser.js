import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.js";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const authUser = async (req, res, next) => {
  const token = req.header("authtoken");
  if (!token) {
    res.status(401).send({ msg: "give correct auth token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(data.user.id);
    req.user = { ...user, id: user._id };
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ msg: "give correct Auth token" });
  }
};
