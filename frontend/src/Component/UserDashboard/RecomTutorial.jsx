import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  CardActions,
  Button,
  Grid2,
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
      {recommandations.length <= 0 ? (
        <Typography variant="body1">There is no recommandations</Typography>
      ) : (
        <Grid2 container spacing={2}>
          {recommandations.map((item, index) => (
            <Grid2 item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      WebkitLineClamp: 3, // Number of lines to show
                    }}
                    color="textSecondary"
                  >
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => navigateTo(item.title)}>
                    See More
                  </Button>
                </CardActions>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      )}
    </Box>
  );
};

export default RecomTutorial;
