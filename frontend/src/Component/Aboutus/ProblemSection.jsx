import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ProblemImage from "../../assets/removebackground.png"; // Replace with your actual image path

const ProblemSection = () => {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 10 } }}>
      <Grid container spacing={6} alignItems="center">
        {/* Text Left */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            What Problem Do We Solve?
          </Typography>
          <Typography variant="h6" color="text.secondary">
            IT learners often face unclear learning paths, overwhelming
            resources, and slow progress.
            <strong>SkillCraft</strong> fixes that by offering:
            <ul>
              <li>Personalized learning based on your IT role</li>
              <li>Clear learning paths with measurable progress</li>
              <li>AI-powered recommendations</li>
              <li>Practical content for real-world skills</li>
            </ul>
            No more wasting time on the wrong tutorials. Grow smarter with
            SkillCraft.
          </Typography>
        </Grid>

        {/* Image Right */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={ProblemImage}
            alt="SkillCraft Problem Solved"
            sx={{ width: "100%", borderRadius: 2 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProblemSection;
