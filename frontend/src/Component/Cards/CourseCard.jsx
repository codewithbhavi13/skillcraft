import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";

export default function CourseCard({ course, width }) {
  const navigate = useNavigate();
  const handleOnCourseClick = () => {
    navigate("/course/" + course.title.toLowerCase().replaceAll(" ", "-"));
  };
  const descriptionlimit = 140;
  const displayedDescription =
    course.description.length > 100
      ? course.description.substring(0, descriptionlimit) + "…"
      : course.description;
  return (
    <Card
      sx={{ maxWidth: 300, width: width ? width : "auto", borderRadius: 3 }}
    >
      <CardActionArea onClick={handleOnCourseClick}>
        <CardMedia
          component="img"
          height="170"
          image={course.thumbnail}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {course.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", whiteSpace: "wrap" }}
          >
            {displayedDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
