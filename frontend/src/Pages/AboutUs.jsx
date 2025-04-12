// src/AboutUs.js
import React from "react";
import { Container, Box } from "@mui/material";
import AboutHero from "../Component/Aboutus/AboutHero";
import UniqueFeature from "../Component/Aboutus/UniqueFeature";
import FutureGoal from "../Component/Aboutus/FutureGoal";

const AboutUs = () => {
  return (
    <Container maxWidth="lg">
      <Box>
        <AboutHero />
        <UniqueFeature />
        <FutureGoal />
      </Box>
    </Container>
  );
};

export default AboutUs;
