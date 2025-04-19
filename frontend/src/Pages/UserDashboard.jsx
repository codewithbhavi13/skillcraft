import React, { useState } from "react";

import UserDetail from "../Component/UserDashboard/UserDetails";
import RecomTutorial from "../Component/UserDashboard/RecomTutorial";
import OnGoingCourse from "../Component/UserDashboard/OnGoingCourse";
import LikeBlog from "../Component/UserDashboard/LikeBlog";
import Roadmap from "../Component/UserDashboard/Roadmap";
import Feedback from "../Component/UserDashboard/Feedback";
import GoalsUseCase from "../Component/UserDashboard/GoalsUseCase";
const UserDashboard = () => {
  const recommendations = [
    {
      title: "Mastering JavaScript Loops",
      description: "Level up your logic with loop mastery.",
    },
    {
      title: "CSS Grid Advanced",
      description: "Layout like a pro with CSS Grid.",
    },
    {
      title: "React Props & State",
      description: "Understand dynamic UIs with React.",
    },
  ];
  const ongoingTutorial = [
    { title: "JavaScript Functions", progress: 45 },
    { title: "React Hooks", progress: 20 },
    { title: "CSS Flexbox", progress: 60 },
  ];
  const blogLikedList = [
    {
      title: "Mastering JavaScript Loops",
      description: "Level up your logic with loop mastery.",
    },
    {
      title: "CSS Grid Advanced",
      description: "Layout like a pro with CSS Grid.",
    },
    {
      title: "React Props & State",
      description: "Understand dynamic UIs with React.",
    },
  ];
  const roadmapData = [
    { title: "HTML Basics", status: "completed" },
    { title: "CSS Fundamentals", status: "completed" },
    { title: "JavaScript Intro", status: "current" },
    { title: "React Basics", status: "pending" },
    { title: "Node.js Backend", status: "pending" },
    { title: "Final Project", status: "pending" },
  ];

  return (
    <>
      <UserDetail />
      <Roadmap roadmap={roadmapData} />
      <RecomTutorial recommandations={recommendations} />
      <OnGoingCourse ongoing={ongoingTutorial} />
      <LikeBlog bloglike={blogLikedList} />
    </>
  );
};

export default UserDashboard;
