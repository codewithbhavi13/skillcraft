import React from "react";
import { Stepper, Step, StepLabel, Typography, Box } from "@mui/material";

const Roadmap = ({ roadmap }) => {
  const activeStep = roadmap.findIndex((step) => step.status === "current");

  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Your Learning Roadmap
      </Typography>

      <Stepper activeStep={activeStep} alternativeLabel>
        {roadmap.map((step, index) => (
          <Step key={index} completed={step.status === "completed"}>
            <StepLabel>{step.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default Roadmap;
