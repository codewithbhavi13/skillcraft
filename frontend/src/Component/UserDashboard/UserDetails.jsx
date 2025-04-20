import React, { useContext } from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import { UserContext } from "../../context/UserContext";

const UserDetail = ({ careerProgress }) => {
  const { userDetails } = useContext(UserContext);

  return (
    <Box p={3} sx={{ pb: 0 }}>
      <Typography variant="h4">Welcome back, {userDetails.username}</Typography>
      <Box my={3}>
        <Typography variant="subtitle1">Your Learning Progress</Typography>
        <LinearProgress
          variant="determinate"
          value={parseInt(careerProgress)}
        ></LinearProgress>
        <Typography variant="caption">{careerProgress}% Complete</Typography>
      </Box>
    </Box>
  );
};
export default UserDetail;
