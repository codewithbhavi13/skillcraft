import React from "react";
import { Grid, Card, CardContent, Typography, Box, Grid2 } from "@mui/material";
import { styled } from "@mui/system";

const goals = [
  {
    title: "Gamification Features",
    description:
      "Introduce badges, levels, and leaderboards to keep users engaged.",
  },
  {
    title: "Mobile App Development",
    description: "Develop SkillCraft for iOS and Android platforms.",
  },
  {
    title: "Code Review System",
    description:
      "Allow users to submit code for  providing feedback and improvement tips.",
  },
  {
    title: "Interactive Code Playgrounds",
    description:
      "Allow users to write, test, and share code in an interactive environment .",
  },
  {
    title: "Community Features",
    description: "Enable users to share, collaborate, and discuss coding.",
  },

  {
    title: "Real-time Collaboration",
    description: "Allow real-time collaboration on coding challenges.",
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",

  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
  },
}));

const FutureGoalsGrid = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 6, m: 2, textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 4,

          padding: "10px 20px",
          borderRadius: "12px",
        }}
      >
        Our Future Goals
      </Typography>
      <Grid2 container spacing={3} marginBottom={7}>
        {goals.map((goal, index) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <StyledCard sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {goal.title}
                </Typography>
                <Typography variant="body2">{goal.description}</Typography>
              </CardContent>
            </StyledCard>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default FutureGoalsGrid;
