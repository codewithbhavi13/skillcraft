import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const RecommendationModal = ({ open, handleClose, handleSubmit }) => {
  const [preferences, setPreferences] = useState({
    language: "",
    difficulty: "",
    topic: "",
  });

  // Handle Form Change
  const handleChange = (e) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Select Your Preferences</DialogTitle>
      <DialogContent>
        {/* Select Programming Language */}
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Programming Language</InputLabel>
          <Select name="language" value={preferences.language} onChange={handleChange}>
            <MenuItem value="javascript">JavaScript</MenuItem>
            <MenuItem value="python">Python</MenuItem>
            <MenuItem value="java">Java</MenuItem>
          </Select>
        </FormControl>

        {/* Select Difficulty Level */}
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Difficulty Level</InputLabel>
          <Select name="difficulty" value={preferences.difficulty} onChange={handleChange}>
            <MenuItem value="beginner">Beginner</MenuItem>
            <MenuItem value="intermediate">Intermediate</MenuItem>
            <MenuItem value="advanced">Advanced</MenuItem>
          </Select>
        </FormControl>

        {/* Select Topic */}
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Topic</InputLabel>
          <Select name="topic" value={preferences.topic} onChange={handleChange}>
            <MenuItem value="web development">Web Development</MenuItem>
            <MenuItem value="data structures">Data Structures</MenuItem>
            <MenuItem value="machine learning">Machine Learning</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      
      <DialogActions>
        <Button onClick={handleClose} color="secondary">Cancel</Button>
        <Button onClick={() => handleSubmit(preferences)} color="primary" variant="contained">Get Recommendations</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RecommendationModal;
