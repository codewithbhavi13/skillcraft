import { Grid2 } from "@mui/material";
import CourseCard from "../Cards/CourseCard";

const CourseGrid = ({ courses = [] }) => {
  return (
    <Grid2 container spacing={3}>
      {courses.map((course, index) => (
        <Grid2 item xs={12} sm={6} md={4} key={index}>
          <CourseCard course={course} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default CourseGrid;
