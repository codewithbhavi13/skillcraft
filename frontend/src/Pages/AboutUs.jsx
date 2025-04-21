import React from "react";
import { Container, Box } from "@mui/material";
import AboutHero from "../Component/Aboutus/AboutHero";
import UniqueFeature from "../Component/Aboutus/UniqueFeature";
import FutureGoal from "../Component/Aboutus/FutureGoal";
import Mission from "../Component/Aboutus/Mission";
import ProblemSection from "../Component/Aboutus/ProblemSection";
import Feedback from "../Component/Aboutus/Feedback";

const AboutUs = () => {
  return (
    <Box>
      <AboutHero />
      <Mission />
      <ProblemSection />
      <FutureGoal />
      <Feedback />
    </Box>
  );
};

export default AboutUs;
