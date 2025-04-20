import React, { useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const LikeBlog = ({ bloglike = [] }) => {
  const navigate = useNavigate();
  return (
    <div style={{ margin: "25px" }}>
      <Typography variant="h5" gutterBottom>
        Your Liked Blog
      </Typography>
      {bloglike.length === 0 ? (
        <Typography variant="h6">No Liked Blogs</Typography>
      ) : (
        <Grid container spacing={2}>
          {bloglike.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2, // number of lines you want
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    color="textSecondary"
                  >
                    {item.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => navigate(`/blog/${item.id}`)}>
                    Read Again
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};
export default LikeBlog;
