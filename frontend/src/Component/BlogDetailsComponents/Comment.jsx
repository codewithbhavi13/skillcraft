import React, { useContext, useEffect, useState } from "react";

import {
  deepOrange,
  deepPurple,
  green,
  blue,
  pink,
  amber,
  indigo,
  teal,
  grey,
} from "@mui/material/colors";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { UserContext } from "../../context/UserContext";
import { BlogContext } from "../../context/BlogContext";

const avatarColors = [
  deepOrange[500],
  deepPurple[500],
  green[500],
  blue[500],
  pink[500],
  amber[500],
  indigo[500],
  teal[500],
];

export default function Comment({ comment, commentIndex, blogId }) {
  const [showIcons, setShowIcons] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const openDeleteDialog = () => setDeleteDialog(true);
  const closeDeleteDialog = () => setDeleteDialog(false);

  const [editDialog, setEditDialog] = useState(false);
  const openEditDialog = () => setEditDialog(true);
  const closeEditDialog = () => setEditDialog(false);

  const [editCommentText, setEditCommentText] = useState("");

  const { deleteComment, editComment } = useContext(BlogContext);

  const { id } = useContext(UserContext).userDetails;

  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const checkAuthorization = () => {
    if (id === comment.userId) {
      setShowIcons(true);
    }
  };
  useEffect(() => {
    setEditCommentText(comment.message);
    return () => setEditCommentText("");
  }, [comment]);
  return (
    <ListItem
      onMouseEnter={checkAuthorization}
      onMouseLeave={() => setShowIcons(false)}
      key={commentIndex}
      sx={{ alignItems: "flex-start" }}
    >
      <ListItemAvatar>
        <Avatar
          sx={{
            fontSize: 16,
            height: 34,
            width: 34,
            mt: 2,
            bgcolor:
              avatarColors[
                commentIndex + 1 > avatarColors.length
                  ? commentIndex % avatarColors.length
                  : commentIndex
              ],
          }}
        >
          {comment.username.charAt(0).toUpperCase()}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Stack direction={"row"} sx={{ alignItems: "center" }} spacing={2}>
            <Typography sx={{ flex: 1 }} variant="h6">
              {comment.username}
            </Typography>
            <Typography variant="h7">
              {" "}
              {comment.createdAt !== comment.updatedAt && "Edited"}{" "}
              {formatter.format(new Date(comment.updatedAt))}{" "}
            </Typography>
          </Stack>
        }
        secondary={
          <Box>
            <Typography variant="p" color={grey[700]}>
              {comment.message}
            </Typography>
            {showIcons && (
              <Stack direction={"row"}>
                <IconButton onClick={openDeleteDialog}>
                  <DeleteOutline fontSize="small" />
                </IconButton>
                <IconButton onClick={openEditDialog}>
                  <EditOutlined fontSize="small" />
                </IconButton>
              </Stack>
            )}
          </Box>
        }
      />
      <Dialog open={deleteDialog}>
        <DialogTitle>Are you sure you want to delete?</DialogTitle>
        <DialogActions>
          <Button onClick={closeDeleteDialog} autoFocus>
            No
          </Button>
          <Button
            onClick={() => {
              deleteComment(blogId, comment._id);
              closeDeleteDialog();
            }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={editDialog} fullWidth>
        <DialogTitle>Edit Comment</DialogTitle>
        <DialogContent>
          <TextField
            multiline
            variant="outlined"
            fullWidth
            value={editCommentText}
            onChange={(e) => setEditCommentText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeEditDialog} autoFocus>
            Cancel
          </Button>
          <Button
            onClick={() => {
              editComment(blogId, comment._id, editCommentText);
              closeEditDialog();
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </ListItem>
  );
}
