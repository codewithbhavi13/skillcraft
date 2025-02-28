import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContex";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

const BlogDetail = () => {
  const { blogs } = useContext(BlogContext);
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  return blog ? (
    <Card sx={{ margin: 3, padding: 2 }}>
      <CardContent>
        <Typography variant="h4">{blog.title}</Typography>
        <img src={blog.image} alt={blog.title} width="100%" />
        {/* Fix: Render HTML content correctly */}
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </CardContent>
    </Card>
  ) : (
    <Typography>Blog not found!</Typography>
  );
};

export default BlogDetail;
