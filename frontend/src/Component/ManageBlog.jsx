import React, { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import {
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
  Box,
  Grid2,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
} from "@mui/material";
import "react-quill/dist/quill.snow.css";

import { useNavigate } from "react-router-dom";
import BlogForm from "./AdminDashboard/BlogForm";
import { Favorite } from "@mui/icons-material";

const ManageBlog = () => {
  const { addBlog, blogs, deleteBlog, editBlog } = useContext(BlogContext);
  const navigate = useNavigate();

  const [deleteDialog, setDeleteDialog] = useState(false);
  const handleOpenDeleteDialog = () => setDeleteDialog(true);
  const handleCloseDeleteDialog = () => setDeleteDialog(false);
  const handleDeleteBlog = (id) => {
    deleteBlog(id);
    handleCloseDeleteDialog();
  };
  const [editDialog, setEditDialog] = useState(false);
  const handleOpenEditDialog = () => setEditDialog(true);
  const handleCloseEditDialog = () => setEditDialog(false);
  const handleEditBlog = (title, image, content, id) => {
    editBlog({ title, image, content, id });
    handleCloseEditDialog();
  };
  // Handle Image Upload from Computer

  // Handle Blog Submission
  const handleSubmit = (title, image, content, id) => {
    if (!title || !image || !content) {
      alert("All fields are required!");
      return;
    }
    addBlog({ title, image, content });
  };

  return (
    <Container sx={{ mt: 5 }}>
      <BlogForm
        formTitle="Create Blog"
        submitBtnText="Publish Blog"
        data={false}
        handleSubmit={handleSubmit}
      />
      <Box sx={{ mt: 5 }}>
        <Typography sx={{ my: 1 }} variant="h5">
          Existing Blogs
        </Typography>
        <Grid2 spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} container>
          {blogs.map((blog, index) => (
            <Grid2 key={index} size={{ xs: 2, sm: 4, md: 4 }}>
              <Card>
                <CardMedia sx={{ height: 150 }} image={blog.image} />
                <CardContent>
                  <Stack
                    direction={"row"}
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h6">{blog.title}</Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {blog.likes.length} &nbsp;
                      <Favorite color="error" />
                    </Box>
                  </Stack>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      lineHeight: "inherit",
                      minWidth: "auto",
                      mr: "auto",
                      justifyContent: "flex-start",
                    }}
                    onClick={() => navigate(`/blog/${blog.id}`)}
                  >
                    Read
                  </Button>
                  <Button
                    onClick={handleOpenEditDialog}
                    sx={{ lineHeight: "inherit", minWidth: "auto" }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={handleOpenDeleteDialog}
                    sx={{ lineHeight: "inherit", minWidth: "auto" }}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
              <Dialog open={deleteDialog}>
                <DialogContent>Are you sure you want to delete?</DialogContent>
                <DialogActions>
                  <Button size="small" onClick={handleCloseDeleteDialog}>
                    No
                  </Button>
                  <Button
                    size="small"
                    onClick={() => handleDeleteBlog(blog.id)}
                  >
                    Yes
                  </Button>
                </DialogActions>
              </Dialog>
              <Dialog open={editDialog}>
                <DialogContent>
                  <BlogForm
                    formTitle="Edit Blog"
                    submitBtnText="Save"
                    handleSubmit={handleEditBlog}
                    data={blog}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseEditDialog}>Cancel</Button>
                </DialogActions>
              </Dialog>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Container>
  );
};

export default ManageBlog;
