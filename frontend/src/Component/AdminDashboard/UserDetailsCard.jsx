import React, { useContext, useEffect } from "react";
import {
  Box,
  Typography,
  LinearProgress,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import { CourseContext } from "../../context/CourseContext";

const UserDetailsCard = ({
  name,
  selectedCareer,

  enrolledTutorials,
}) => {
  const { tutorials } = useContext(CourseContext);

  const calculateCareerProgress = () => {
    let noOfTopics = 0;
    let noofCompletedTopics = 0;
    tutorials.forEach((tutorial) => {
      if (tutorial.category === selectedCareer) {
        if (tutorial.title) {
          noOfTopics += getNoofTopicsInTutorial(tutorial.title);
          const trackedTutorial = enrolledTutorials.find(
            (enrolledTutorial) => enrolledTutorial.title === tutorial.title
          );
          if (trackedTutorial) {
            noofCompletedTopics +=
              getNoofTopicsCompletedInTutorial(trackedTutorial);
          }
        }
      }
    });
    return ((noofCompletedTopics / noOfTopics) * 100).toFixed();
  };
  const getNoofTopicsInTutorial = (tutorialName) => {
    const originalTutorial = tutorials.find(
      (tutorial) => tutorial.title === tutorialName
    );
    let noOfTopics = 0;
    originalTutorial.chapters.forEach(
      (chapter) => (noOfTopics += chapter.topics.length)
    );
    return noOfTopics;
  };

  const getNoofTopicsCompletedInTutorial = (trackedTutorial) => {
    let noOfTopicsCompleted = 0;
    trackedTutorial.startedChapters.forEach(
      (startedChapter) => (noOfTopicsCompleted += startedChapter.topics.length)
    );
    return noOfTopicsCompleted;
  };
  const careerProgress =
    calculateCareerProgress() === "NaN" ? 0 : calculateCareerProgress();
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="subtitle1">
          {selectedCareer === "" ? "Career Not Selected" : selectedCareer}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={parseInt(careerProgress)}
        ></LinearProgress>
        <Typography variant="caption">{careerProgress}% Complete</Typography>
      </CardContent>
    </Card>
  );
};
export default UserDetailsCard;
