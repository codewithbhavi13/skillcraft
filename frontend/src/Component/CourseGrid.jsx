import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const CourseCard = ({ course }) => {
  return (
    <Card sx={{ maxWidth: 345, mb: 2 }}>
      <CardMedia 
        component="img" 
        height="180" 
        image={course.thumbnail || "https://via.placeholder.com/400"} 
        alt={course.title} 
      />
      <CardContent>
        <Typography variant="h6">{course.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {course.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const CourseGrid = ({ courses = [] }) => {
  return (
    <Grid container spacing={3}>
      {courses.map((course, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CourseCard course={course} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CourseGrid;
