import {
  aiEngineerCourse,
  aiEngineerTutorials,
} from "./courses/AI_EngineerCourse.js";
import {
  DevOpsEngineerCourse,
  DevOpsTutorials,
} from "./courses/DevOpsEngineerCourse.js";

export const allTutorials = [
  ...aiEngineerTutorials,
  ...DevOpsTutorials,
  {
    category: "Web Development",
    description: "understand the basic of html with proper symantics",
    thumbnail: "",
    title: "Basics of HTML",
    chapters: [],
  },
];

export const allCourses = [
  aiEngineerCourse,
  DevOpsEngineerCourse,
  {
    category: "Web Development",
    description:
      "Learn Front end fundamentatlss with HTML, CSS , JS and money more",
    path: [],
    thumbnail: "",
    title: "Frontend Development",
    tutorials: [],
  },
];
