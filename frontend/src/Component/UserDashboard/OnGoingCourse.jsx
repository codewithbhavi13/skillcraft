import React from "react";
import {
  Card,
  CardContent,
  LinearProgress,
  Typography,
  Grid,
} from "@mui/material";

const OnGoingCourse = ({ ongoing = [] }) => {
  return (
    <div style={{ marginTop: "25px" }}>
      <Typography variant="h5" gutterBottom>
        continue Learning
      </Typography>
      <Grid container spacing={2}>
        {ongoing.length > 0 ? (
          ongoing.map((tutorial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{tutorial.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {" "}
                    Progress: {tutorial.progress}%
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={tutorial.progress}
                    sx={{ mt: 1, height: 8, borderRadius: 2 }}
                  ></LinearProgress>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No ongoing Tutorial.Start Learning Now !</Typography>
        )}
      </Grid>
    </div>
  );
};
export default OnGoingCourse;
