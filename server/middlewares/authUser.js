import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const authUser = (req, res, next) => {
  const token = req.header("authtoken");
  if (!token) {
    res.status(401).send({ msg: "give correct auth token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ msg: "give correct Auth token" });
  }
};
