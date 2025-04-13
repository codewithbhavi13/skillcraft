import React, { useContext } from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import { UserContext } from "../../context/UserContext";

const UserDetail = () => {
  const { userDetails } = useContext(UserContext);
  return (
    <Box p={5}>
      <Typography variant="h4">Welcome back, {userDetails.username}</Typography>
      <Box my={3}>
        <Typography variant="subtitle1">Your Learning Progress</Typography>
        <LinearProgress variant="determinate" value={70}></LinearProgress>
        <Typography variant="caption">70% Complete</Typography>
      </Box>
    </Box>
  );
};
export default UserDetail;
