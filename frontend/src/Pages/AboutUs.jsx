// src/AboutUs.js
import React from "react";
import { Container, Box } from "@mui/material";
import AboutHero from "../Component/Aboutus/AboutHero";
import UniqueFeature from "../Component/Aboutus/UniqueFeature";
import FutureGoal from "../Component/Aboutus/FutureGoal";

const AboutUs = () => {
  return (
    <Box>
      <AboutHero />
      <Container maxWidth="lg">
        <UniqueFeature />
        <FutureGoal />
      </Container>
    </Box>
  );
};

export default AboutUs;
