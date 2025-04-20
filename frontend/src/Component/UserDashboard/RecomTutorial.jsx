import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  CardActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const RecomTutorial = ({ recommandations = [] }) => {
  const navigate = useNavigate();
  const navigateTo = (title) => {
    const addToPath = title.toLowerCase().replaceAll(" ", "-");
    navigate("/tutorial/" + addToPath);
  };
  return (
    <Box style={{ margin: "25px" }}>
      <Typography variant="h5" gutterBottom>
        Recommended for you
      </Typography>
      <Grid container spacing={2}>
        {recommandations.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => navigateTo(item.title)}>See More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RecomTutorial;
