const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String,
});

const chapterSchema = new mongoose.Schema({
  name: String,
  description: String,
  topics: mongoose.Schema.Types.Mixed, // allows any type
});

const tutorialSchema = new mongoose.Schema({
  title: String,
  description: String,
  thumbnail: String,
  category: String,
  chapters: [chapterSchema],
  quiz: [quizSchema],
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
});

const Tutorial = mongoose.model("Tutorial", tutorialSchema);

module.exports = Tutorial;
