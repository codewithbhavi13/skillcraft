// src/components/AboutHero.js
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Aboutus from "../../assets/Aboutus.png";

const AboutHero = () => {
  return (
    <Box sx={{ px: { xs: 3, md: 8 }, py: { xs: 6, md: 10 } }}>
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h5" color="Green" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            Powering Tech Learner <span style={{ color: "#4CAF50" }}>grow</span>{" "}
            through personalized learning.
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
            SkillCraft is designed for the next generation of tech enthusiasts.
            From coding and AI to cloud and cybersecurity, we provide
            personalized, interactive learning experiences that match your goals
            and pace.
            <br />
            <br />
            Whether you're a student, a career switcher, or an upskilling
            professional, SkillCraft helps you build real-world skills through
            smart content recommendations, hands-on projects, and progress
            tracking — all in one platform.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={Aboutus}
            alt="SkillCraft learning environment"
            sx={{
              width: "100%",
              maxWidth: 700,
              borderRadius: 4,
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutHero;
