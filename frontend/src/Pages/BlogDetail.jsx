import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  List,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { UserContext } from "../context/UserContext";
import { MessageContext } from "../context/MessageContext";
import Comment from "../Component/BlogDetailsComponents/Comment";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const BlogDetail = () => {
  const { blogs, addComment, likeUnlikeBlog } = useContext(BlogContext);
  const { userDetails } = useContext(UserContext);
  const { username } = useContext(UserContext).userDetails;
  const { setWarningMsg } = useContext(MessageContext);
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);

  const [blog, setBlog] = useState(false);
  const [comments, setComments] = useState([]);
  const handleSendComment = () => {
    if (comment.trim() === "") {
      return setWarningMsg("Empty Comment Cannot be send");
    }
    addComment(id, comment);
    setComment("");
  };

  useEffect(() => {
    if (blogs) {
      console.log(blogs);
      const selectedBlog = blogs?.find((b) => b.id === id);
      if (selectedBlog !== undefined) {
        setBlog(selectedBlog);
        setIsLiked(
          selectedBlog.likes.find((userId) => userId === userDetails.id)
        );
        setComments(selectedBlog.comments.slice().reverse());
      }
    }
  }, [blogs, blog?.comments?.length]);

  return blog ? (
    <Box>
      <Card sx={{ margin: 3, padding: 2 }}>
        <CardContent>
          <Stack
            direction={"row"}
            sx={{ my: 2, justifyContent: "space-between" }}
          >
            <Typography variant="h4">{blog.title}</Typography>
            <IconButton onClick={() => likeUnlikeBlog(blog.id)}>
              {isLiked ? <Favorite color="error" /> : <FavoriteBorder />}
            </IconButton>
          </Stack>
          <img src={blog.image} alt={blog.title} width="100%" />
          {/* Fix: Render HTML content correctly */}
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </CardContent>
      </Card>
      <Card sx={{ mx: 3, padding: 1 }}>
        <CardContent>
          <Stack direction={"row"} sx={{ alignItems: "center" }} spacing={1}>
            <Avatar>{username.charAt(0).toUpperCase()}</Avatar>
            <TextField
              sx={{ flexGrow: 1 }}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              label="Write Your Comment"
              variant="outlined"
            />
          </Stack>
          <Button
            variant="contained"
            onClick={handleSendComment}
            sx={{ mt: 2, mb: 4 }}
          >
            Add Comment
          </Button>
          <Typography variant="h5">Comments</Typography>
          <List>
            {comments.length !== 0 ? (
              comments.map((comment, commentIndex) => (
                <Comment
                  comment={comment}
                  commentIndex={commentIndex}
                  blogId={blog.id}
                />
              ))
            ) : (
              <Typography variant="p">No Comments</Typography>
            )}
          </List>
        </CardContent>
      </Card>
    </Box>
  ) : (
    <Typography>Blog not found!</Typography>
  );
};

export default BlogDetail;
