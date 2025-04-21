import React from "react";
import { Stepper, Step, StepLabel, Typography, Box } from "@mui/material";

const Roadmap = ({ roadmap }) => {
  const activeStep = roadmap.findIndex((step) => step.status === "current");
  const getStepState = (status) => {
    switch (status) {
      case "completed":
        return { completed: true };
      case "current":
        return { active: true };
      default:
        return {}; // pending
    }
  };
  return (
    <Box sx={{ width: "100%", p: 3, py: 0 }}>
      <Typography variant="h6" gutterBottom>
        Your Learning Roadmap
      </Typography>

      <Stepper nonLinear alternativeLabel>
        {roadmap.map((step, index) => (
          <Step key={index} {...getStepState(step.status)}>
            <StepLabel>{step.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default Roadmap;
