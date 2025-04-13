import React, { useState } from "react";

import Recommendation from "../Component/HomePageComponents/Recommendation";
import SpecialFeature from "../Component/SpecialFeature";
import FAQSection from "../Component/FAQSection";
import UserDashboard from "../Component/UserDashboard/UserDetails";
import RecomTutorial from "../Component/UserDashboard/RecomTutorial";
import OnGoingCourse from "../Component/UserDashboard/OnGoingCourse";
const HomePage = () => {
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
  return (
    <>
      <Recommendation />
      <SpecialFeature />
      <FAQSection />
      {/* <SpecialFeature/> */}
    </>
  );
};

export default HomePage;
