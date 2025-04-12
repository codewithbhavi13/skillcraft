import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CourseContext } from "../context/CourseContext";
import { Backdrop, Box, Grid2, Typography } from "@mui/material";
import TutorialCard from "../Component/Cards/TutorialCard";

export default function CoursePage() {
  const parms = useParams();
  const navigate = useNavigate();
  useEffect(() => console.log(parms), [parms]);
  const { courses } = useContext(CourseContext);
  const course = courses.find(
    (item) => item.title.toLowerCase() === parms.course.replaceAll("-", " ")
  );
  const handleOnTutorialClick = (title) => {
    navigate(title.toLowerCase().replaceAll(" ", "-"));
  };

  if (!course) {
    return <div>No course found</div>;
  }
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: 400,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 4,
        }}
      >
        <img
          src={course.thumbnail}
          alt="background"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            filter: "blur(5px)",
            opacity: 0.4,
            left: 0,
          }}
        />

        <Typography variant="h3" gutterBottom>
          {course.title}
        </Typography>

        <Typography variant="body1" color="text.secondary">
          {course.description}
        </Typography>
      </Box>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Tutorials
        </Typography>
        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            alignItems: "stretch",
          }}
        >
          {course.tutorials.map((item, index) => (
            <Grid2 key={index} size={{ xs: 2, sm: 4, md: 4 }}>
              <TutorialCard tutorial={item} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
}
