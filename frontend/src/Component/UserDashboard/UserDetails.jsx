import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

const UserDetail = () => {
  return (
    <Box p={5}>
      <Typography variant="h4" gutterBotton>
        Welcome back,Bhavika
      </Typography>
      <Box my={3}>
        <Typography variant="subtitle1">Your Learning Progress</Typography>
        <LinearProgress variant="determinate" value={70}></LinearProgress>
        <Typography variant="caption">70% Complete</Typography>
      </Box>
    </Box>
  );
};
export default UserDetail;
