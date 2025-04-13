// src/components/UniqueFeatures.js
import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import InsightsIcon from "@mui/icons-material/Insights";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

const features = [
  {
    icon: <InsightsIcon fontSize="large" color="primary" />,
    title: "AI-Powered Recommendations",
    description: "Tailored content suggestions based on your learning journey.",
  },
  {
    icon: <CodeIcon fontSize="large" color="primary" />,
    title: "Project-Based Learning",
    description: "Build real-world applications to enhance practical skills.",
  },
  {
    icon: <AutoGraphIcon fontSize="large" color="primary" />,
    title: "Progress Tracking",
    description: "Track and analyze your learning milestones.",
  },
];

const UniqueFeature = () => {
  return (
    <Box sx={{ py: 5, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom color="primary">
        Why SkillCraft Stands Out
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                p: 3,
                boxShadow: 3,
                "&:hover": { boxShadow: 6, transform: "translateY(-5px)" },
                transition: "0.3s",
              }}
            >
              <CardContent>
                <Box mb={2}>{feature.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UniqueFeature;
