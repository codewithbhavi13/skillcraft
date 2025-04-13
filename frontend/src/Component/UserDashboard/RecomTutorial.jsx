import React from "react";
import { Typography, Grid, Card, CardContent } from "@mui/material";
const RecomTutorial = ({ recommandations = [] }) => {
  return (
    <div style={{ margin: "25px" }}>
      <Typography variant="h5" gutterBottom>
        Recommended for you
      </Typography>
      <Grid container spacing={2}>
        {recommandations.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default RecomTutorial;
