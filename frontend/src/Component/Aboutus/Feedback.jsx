import React, { useContext, useState } from "react";
import { Box, Typography, TextField, Button, Rating } from "@mui/material";
import { ThemeContext } from "../../context/ThemeContext";
import { MessageContext } from "../../context/MessageContext";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export default function Feedback() {
  const [feedback, setFeedback] = useState();
  const [rating, setRating] = useState(4);
  const { darkMode } = useContext(ThemeContext);
  const { setSuccessMsg, setWarningMsg, setErrorMsg } =
    useContext(MessageContext);
  const {
    userDetails: { username, email, authtoken },
    isLogin,
  } = useContext(UserContext);

  const handleSubmit = async () => {
    if (!isLogin) return setWarningMsg("Please Login First");
    console.log({ feedback, rating });
    try {
      const { data, status } = await axios.post(
        SERVER_URL + "/api/user-preferences/feedback",
        {
          message: feedback,
          rating,
          email,
          username,
        },
        {
          headers: { authtoken },
        }
      );
      if (status === 201) {
        setSuccessMsg(data.msg);
      }
    } catch (error) {
      setErrorMsg("Somethign Went Wrong");
    }

    setFeedback("");
    setRating(4);
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: "0 auto",
        padding: 4,
        boxShadow: 3,
        borderRadius: 2,
        border: "2px solid", // Adding border
        borderColor: darkMode ? "#fff" : "#000", // Dynamic border color based on dark mode
        marginBottom: 7,
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Share Your FeedBack
      </Typography>

      <TextField
        label="Your FeedBack"
        multiline
        fullWidth
        rows={4}
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Typography component="legend">Rating</Typography>
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => setRating(newValue)}
        sx={{ marginBottom: 2 }}
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={!feedback}
        fullWidth
      >
        Submit
      </Button>
    </Box>
  );
}
