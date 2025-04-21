import React, { useContext } from "react";
import {
  Card,
  CardContent,
  LinearProgress,
  Typography,
  Box,
  Grid2,
  Button,
  CardActions,
  CardHeader,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const OnGoingCourse = ({ ongoing = [] }) => {
  const navigate = useNavigate();
  const { enrolledTutorials } = useContext(UserContext).userDetails;
  console.log(enrolledTutorials);
  return (
    <Box style={{ margin: "25px" }}>
      <Typography variant="h5" gutterBottom>
        Continue Learning
      </Typography>
      <Grid2 spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} container>
        {ongoing.length > 0 ? (
          ongoing.map((tutorial, index) => (
            <Grid2 size={{ xs: 2, sm: 4, md: 4 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent>
                  <Typography variant="h6">{tutorial.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Progress: {tutorial.progress}%
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={parseInt(tutorial.progress)}
                    sx={{ mt: 1, height: 8, borderRadius: 2 }}
                  ></LinearProgress>
                </CardContent>
                <CardActions sx={{ mt: "auto" }}>
                  <Button
                    onClick={() => navigate(tutorial.url)}
                    sx={{ ml: "auto" }}
                  >
                    Continue
                  </Button>
                </CardActions>
              </Card>
            </Grid2>
          ))
        ) : (
          <Typography>No ongoing Tutorial. Start Learning Now !</Typography>
        )}
      </Grid2>
    </Box>
  );
};
export default OnGoingCourse;
