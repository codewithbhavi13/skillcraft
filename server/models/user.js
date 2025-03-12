import mongoose from "mongoose";
import { Schema } from "mongoose";

const startedChapterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    noOfTopics: {
      type: Number,
      required: true,
    },
    topics: {
      type: [String],
      default: [],
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { _id: 0 }
);

const enrolledTutorialSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    noOfChapters: {
      type: Number,
      required: true,
    },
    startedChapters: {
      type: [startedChapterSchema],
      default: [],
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { _id: 0 }
);

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    enrolledTutorials: { type: [enrolledTutorialSchema], default: [] },
    selectedCareer: {
      type: String,
      default: "",
    },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

export const User = mongoose.model("User", userSchema);

export default User;
