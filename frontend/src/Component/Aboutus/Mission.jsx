import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import MissionImage from "../../assets/Aboutus.png"; // Replace with your actual image path

const Mission = () => {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 10 } }}>
      <Grid container spacing={6} alignItems="center">
        {/* Image Left */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={MissionImage}
            alt="SkillCraft Mission"
            sx={{ width: "100%", borderRadius: 2 }}
          />
        </Grid>

        {/* Text Right */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Our Mission: Empowering Every IT Learner to Grow Smarter
          </Typography>
          <Typography variant="h6" color="text.secondary">
            At <strong>SkillCraft</strong>, our mission is to provide every IT
            professional—from developers and DevOps engineers to cybersecurity
            analysts and cloud architects—with a smarter way to learn. We’re
            here to help you grow skills that matter, in a way that fits your
            pace, passion, and career path.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Mission;
