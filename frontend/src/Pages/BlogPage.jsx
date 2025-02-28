import React, { useContext, useState, useEffect } from "react";
import { BlogContext } from "../context/BlogContex";
import { ThemeContext } from "../context/ThemeContext";
import { useTheme } from "@mui/material/styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
  Box,
  Button,
  Pagination,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid2,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const BlogPage = () => {
  const { blogs } = useContext(BlogContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const theme = useTheme();

  const blogsPerPage = 6; // Number of blogs per page
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [blog, setBlog] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blog") // Change this URL if needed
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setCurrentPage(1); // Reset to first page on new filter
  };

  // Filter blogs based on search and category
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All" || blog.category === category;
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "350px",
          backgroundImage: "url()",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: theme.palette.mode === "dark" ? "#fff" : "#000",
          textAlign: "center",
          p: 3,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            Explore Knowledge, One Blog at a Time
          </Typography>
          <Typography
            variant="h5"
            sx={{ mt: 2, textShadow: "1px 1px 8px rgba(0,0,0,0.4)" }}
          >
            Stay updated with the latest insights, trends, and tutorials from
            the tech world.
          </Typography>
        </Container>
      </Box>

      {/* Search & Filter Section */}
      <Box
        sx={{ display: "flex", justifyContent: "space-between", my: 3, gap: 2 }}
      >
        {/* Search Bar */}
        <TextField
          label="Search Blogs..."
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ flex: 1 }}
        />
      </Box>

      {/* Blog Grid */}
      <Grid2 container spacing={3}>
        {currentBlogs.length === 0 ? (
          <Typography>No blogs found</Typography>
        ) : (
          currentBlogs.map((blog) => (
            <Grid2 item xs={12} sm={6} md={4} key={blog.id}>
              <Card
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={blog.image}
                  alt={blog.title}
                />
                <CardContent>
                  <Typography variant="h6">{blog.title}</Typography>
                  <Typography variant="body2">
                    {blog.content.substring(0, 80)}...
                  </Typography>
                  <Link
                    to={`/blog/${blog.id}`}
                    style={{
                      color: theme.palette.primary.main,
                      textDecoration: "none",
                    }}
                  >
                    Read More
                  </Link>
                </CardContent>
              </Card>
            </Grid2>
          ))
        )}
      </Grid2>

      {/* Pagination */}
      <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
        <Pagination
          count={Math.ceil(filteredBlogs.length / blogsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default BlogPage;
