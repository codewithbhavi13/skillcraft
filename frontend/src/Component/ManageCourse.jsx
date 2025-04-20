import React, { useContext, useEffect, useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import axios from "axios";
import { CourseContext } from "../context/CourseContext";

const ManageCourse = () => {
  const [newCourse, setNewCourse] = useState({
    title: "",
    image: "",
    description: "",
    category: "",
  });

  const { courses, setCourses } = useContext(CourseContext);

  const handleChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the course data to the backend API
      const response = await axios.post(
        "http://localhost:5000/api/courses",
        newCourse
      );

      // Handle successful response
      console.log(response.data);
      setCourses((prev) => [...prev, response.data]);

      // Reset form
      setNewCourse({ title: "", image: "", description: "", category: "" });
    } catch (error) {
      // Handle error
      if (error.response) {
        // Error response from server
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
      } else if (error.request) {
        // No response received from server
        console.error("Error request:", error.request);
      } else {
        // General error
        console.error("Error message:", error.message);
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Card sx={{ mt: 5, p: 3, boxShadow: 3 }}>
        <CardContent>
          {/* Heading */}
          <Box display="flex" alignItems="center" mb={2}>
            <Add color="primary" sx={{ mr: 1 }} />
            <Typography variant="h5" fontWeight="bold">
              Add a New Course
            </Typography>
          </Box>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Course Title"
              name="title"
              variant="outlined"
              fullWidth
              margin="normal"
              value={newCourse.title}
              onChange={handleChange}
              required
            />
            <TextField
              label="Image URL"
              name="image"
              variant="outlined"
              fullWidth
              margin="normal"
              value={newCourse.image}
              onChange={handleChange}
              required
            />
            <TextField
              label="Course Description"
              name="description"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              margin="normal"
              value={newCourse.description}
              onChange={handleChange}
              required
            />
            <TextField
              label="Category"
              name="category"
              variant="outlined"
              fullWidth
              margin="normal"
              value={newCourse.category}
              onChange={handleChange}
              required
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Add Course
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ManageCourse;
