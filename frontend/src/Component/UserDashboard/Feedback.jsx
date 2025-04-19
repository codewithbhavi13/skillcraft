import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Rating,
  Snackbar,
  Alert,
  Switch,
} from "@mui/material";
import { ThemeContext } from "../../context/ThemeContext";

export default function Feedback() {
  const [feedback, setFeedback] = useState();
  const [rating, setRating] = useState(4);
  const [submitted, setSubmitted] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleSubmit = () => {
    console.log({ feedback, rating });

    setSubmitted(true);
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
      <Snackbar
        open={submitted}
        autoHideDuration={3000}
        onClose={() => setSubmitted(false)}
      >
        <Alert
          onClose={() => setSubmitted(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Thank You for your Feedback!
        </Alert>
      </Snackbar>
    </Box>
  );
}
