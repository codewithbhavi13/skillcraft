import {
  aiEngineerCourse,
  aiEngineerTutorials,
} from "./courses/AI_EngineerCourse.js";
import {
  DevOpsEngineerCourse,
  DevOpsTutorials,
} from "./courses/DevOpsEngineerCourse.js";
import {
  WebDevelopmentCourse,
  WebDevelopmentTutorials,
} from "./courses/WebDevelopmentCourse.js";
import {
  CyberSecurityCourse,
  CyberSecurityTutorials,
} from "./courses/CyberSecurityCourse.js";

export const allTutorials = [
  ...aiEngineerTutorials,
  ...DevOpsTutorials,
  ...WebDevelopmentTutorials,
  ...CyberSecurityTutorials,
];

export const allCourses = [
  aiEngineerCourse,
  DevOpsEngineerCourse,
  WebDevelopmentCourse,
  CyberSecurityCourse,
];
