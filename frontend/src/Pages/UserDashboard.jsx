import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useState } from "react";
import UserDetail from "../Component/UserDashboard/UserDetails";
import RecomTutorial from "../Component/UserDashboard/RecomTutorial";
import OnGoingCourse from "../Component/UserDashboard/OnGoingCourse";
import LikeBlog from "../Component/UserDashboard/LikeBlog";
import Roadmap from "../Component/UserDashboard/Roadmap";
import { CourseContext } from "../context/CourseContext";
import { BlogContext } from "../context/BlogContext";
import { useNavigate } from "react-router-dom";
import { MessageContext } from "../context/MessageContext";
const UserDashboard = () => {
  const navigate = useNavigate();
  const { isLogin } = useContext(UserContext);
  const { setWarningMsg } = useContext(MessageContext);
  const { enrolledTutorials, selectedCareer, id } =
    useContext(UserContext).userDetails;
  const { tutorials } = useContext(CourseContext);
  const { blogs } = useContext(BlogContext);
  const [ongoingTutorials, setOnGoingTutorials] = useState([]);
  const [careerProgress, setCareerProgress] = useState(0);
  const [blogLikedList, setBlogLikedList] = useState([]);
  const [roadmapData, setRoadMapData] = useState([]);
  const [recommendations, setRecommandation] = useState([]);

  const setRecommandedTutorials = () => {
    let notStartedTutorials = [];
    tutorials.forEach((tutorial) => {
      if (tutorial.category === selectedCareer) {
        const isEnrolled = enrolledTutorials.find(
          (enrolledTutorial) => enrolledTutorial.title === tutorial.title
        );
        if (!isEnrolled)
          notStartedTutorials.push({
            title: tutorial.title,
            description: tutorial.description,
          });
      }
    });
    setRecommandation(notStartedTutorials);
  };

  const calculateUrl = (title) => {
    if (
      enrolledTutorials.length !== 0 &&
      enrolledTutorials !== undefined &&
      title !== undefined &&
      title.trim() !== ""
    ) {
      const tutorial = enrolledTutorials.find((t) => t.title === title);
      let chapterIndex;

      const endChapter = tutorial.startedChapters.find(
        (startedChapter, index) => {
          chapterIndex = index;
          return (
            !startedChapter.isCompleted ||
            index === tutorial.startedChapters.length - 1
          );
        }
      );

      return `/tutorial/${tutorial.title
        .toLowerCase()
        .replaceAll(" ", "-")}/chapter-${chapterIndex + 1}/topic-${
        endChapter.topics.length
      }`;
    }
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

  const calculateTutorialProgress = (trackedTutorial) => {
    const noOfTopics = getNoofTopicsInTutorial(trackedTutorial.title);
    const noOfTopicsCompleted =
      getNoofTopicsCompletedInTutorial(trackedTutorial);
    return ((noOfTopicsCompleted / noOfTopics) * 100).toFixed();
  };

  const calculateRoadMapData = () => {
    let roadMapData = [];
    tutorials.forEach((tutorial) => {
      let data = {};
      if (tutorial.category === selectedCareer) {
        if (tutorial.title) {
          data.title = tutorial.title.split(":")[0].trim();
          const noOfTopics = getNoofTopicsInTutorial(tutorial.title);
          const trackedTutorial = enrolledTutorials.find(
            (enrolledTutorial) => enrolledTutorial.title === tutorial.title
          );
          if (trackedTutorial) {
            const noofCompletedTopics =
              getNoofTopicsCompletedInTutorial(trackedTutorial);
            data.status =
              noofCompletedTopics / noOfTopics < 1 ? "current" : "completed";
          } else {
            data.status = "pending";
          }
          roadMapData.push(data);
        }
      }
    });
    setRoadMapData(roadMapData);
  };

  const setContinueTutorials = () => {
    let onGoing = [];
    enrolledTutorials.forEach((enrolledTutorial) => {
      const calculateProgress = calculateTutorialProgress(enrolledTutorial);
      if (calculateProgress !== "100") {
        onGoing.push({
          title: enrolledTutorial.title,
          url: calculateUrl(enrolledTutorial.title),
          progress: calculateProgress,
        });
      }
    });

    setOnGoingTutorials(onGoing);
  };
  useEffect(() => {
    if (!isLogin) {
      setWarningMsg("Please Login First");
      navigate("/login");
    }
    setContinueTutorials();
    setCareerProgress(calculateCareerProgress());
    setRecommandedTutorials();
    setBlogLikedList(
      blogs.filter((blog) => blog.likes.find((likeid) => likeid == id))
    );

    calculateRoadMapData();
  }, [enrolledTutorials, blogs, tutorials]);

  return (
    <>
      <UserDetail careerProgress={careerProgress} />
      <Roadmap roadmap={roadmapData} />
      <OnGoingCourse ongoing={ongoingTutorials} />
      <RecomTutorial recommandations={recommendations} />
      <LikeBlog bloglike={blogLikedList} />
    </>
  );
};

export default UserDashboard;
