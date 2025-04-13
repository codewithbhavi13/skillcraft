// src/components/FutureGoals.js
import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BuildIcon from "@mui/icons-material/Build";
import GroupIcon from "@mui/icons-material/Group";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import GamesIcon from "@mui/icons-material/Games";

const goals = [
  {
    icon: <RocketLaunchIcon color="primary" />,
    title: "AI-Powered Enhancements",
  },
  { icon: <BuildIcon color="primary" />, title: "Live Coding Environment" },
  {
    icon: <GamesIcon color="primary" />,
    title: "Gamified Learning Experience",
  },
  { icon: <GroupIcon color="primary" />, title: "Community Building" },
  { icon: <SmartphoneIcon color="primary" />, title: "Mobile App Expansion" },
];

const FutureGoal = () => {
  return (
    <Box
      sx={{
        py: 5,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom color="primary">
        Future Goals
      </Typography>
      <List sx={{ maxWidth: 600, margin: "0 auto" }}>
        {goals.map((goal, index) => (
          <ListItem key={index}>
            <ListItemIcon>{goal.icon}</ListItemIcon>
            <ListItemText primary={goal.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FutureGoal;
