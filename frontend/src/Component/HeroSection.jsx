import { Box, Typography, Button, TextField } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?education,coding')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        textAlign: "center",
        p: 3,
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        Explore Top Courses & Tutorials
      </Typography>
      <Typography variant="h6" sx={{ mt: 1, mb: 2 }}>
        Learn, Grow & Upgrade Your Skills
      </Typography>
    </Box>
  );
};

export default HeroSection;
