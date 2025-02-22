import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const categories = ["Web Development", "Backend Development", "AI & ML", "Cybersecurity"];

const TSideBar = () => {
  return (
    <Box sx={{ padding: 2, borderRight: "1px solid #ddd" }}>
      <Typography variant="h6" gutterBottom>
        Categories
      </Typography>
      <List>
        {categories.map((category, index) => (
          <ListItem button key={index}>
            <ListItemText primary={category} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TSideBar;
