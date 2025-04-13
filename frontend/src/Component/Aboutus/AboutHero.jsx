// src/components/AboutHero.js
import React from "react";
import { Box, Typography } from "@mui/material";

const AboutHero = () => {
  return (
    <Box
      sx={{
        height: "50vh", // Full height of the screen

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        animation: "fadeIn 1.5s ease-in-out",
      }}
    >
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        Welcome to SkillCraft
      </Typography>
      <Typography variant="h5">
        Personalized Learning Platform Designed for Coders
      </Typography>
    </Box>
  );
};

export default AboutHero;
