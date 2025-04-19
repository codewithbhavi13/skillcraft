import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import InsightsIcon from "@mui/icons-material/Insights";
import GroupIcon from "@mui/icons-material/Group";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import CodeIcon from "@mui/icons-material/Code";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

const IconCircle = ({ icon }) => (
  <Avatar
    sx={{
      bgcolor: "#1976d2", // vibrant blue like your image
      width: 48,
      height: 48,
    }}
  >
    {icon}
  </Avatar>
);

const SkillCraftAbout = () => {
  return (
    <Box sx={{ p: 6, backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
      {/* Heading */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        fontWeight="bold"
        sx={{ mb: 6 }}
      >
        Built for All <span style={{ color: "#3f51b5" }}>Skill Levels</span> &{" "}
        <span style={{ color: "#3f51b5" }}>Learning Needs</span>
      </Typography>

      <Grid container spacing={6} justifyContent="center" alignItems="center">
        {/* Left Column */}
        <Grid item xs={12} md={3}>
          {[
            { text: "Interactive Tutorials", icon: <SchoolIcon /> },
            { text: "Skill-Based Recommendations", icon: <AutoGraphIcon /> },
            { text: "Real-time Feedback", icon: <InsightsIcon /> },
            { text: "Progress Tracking", icon: <TrackChangesIcon /> },
          ].map((item, i) => (
            <Box key={i} display="flex" alignItems="center" mb={3}>
              <IconCircle icon={item.icon} />
              <Typography variant="body1" sx={{ ml: 2 }}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Grid>

        {/* Center Logo */}
        <Grid item xs={12} md={4} textAlign="center">
          <Box
            sx={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              backgroundColor: "#3f51b5",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "bold",
              mx: "auto",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            SkillCraft
          </Box>
          <Typography variant="subtitle1" mt={2}>
            Crafting Coders of Tomorrow
          </Typography>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={3}>
          {[
            { text: "Beginners", icon: <PeopleIcon /> },
            { text: "Students", icon: <GroupIcon /> },
            { text: "Professionals", icon: <DeveloperModeIcon /> },
            { text: "Career Switchers", icon: <CodeIcon /> },
          ].map((item, i) => (
            <Box key={i} display="flex" alignItems="center" mb={3}>
              <IconCircle icon={item.icon} />
              <Typography variant="body1" sx={{ ml: 2 }}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillCraftAbout;
