import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.js";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const authUser = async (req, res, next) => {
  const token = req.header("authtoken");
  if (!token) {
    return res.status(401).send({ msg: "give correct auth token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(data.user.id);
    if (!user) {
      return res.status(404).send({ msg: "User not Found" });
    }
    req.user = { id: user._id, role: user.role };
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ msg: "give correct Auth token" });
  }
};
