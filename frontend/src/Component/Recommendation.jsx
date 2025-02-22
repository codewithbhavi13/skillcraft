import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import HomeImg from "../assets/homeimg.png"; // Import your image

// Styled components using Material-UI
const GradientText = styled(Typography)({
  fontSize: "2.5rem",
  fontWeight: "bold",
  background: "linear-gradient(to right,rgb(95, 170, 255),rgb(123, 169, 254))",
  WebkitBackgroundClip: "text",
  color: "transparent",
});

const Recommendation = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
        py: 6, // Padding top & bottom
      }}
    >
      {/* Left Side - Image */}
      <Box
        component="img"
        src={HomeImg}
        alt="Recommendation"
        sx={{
          width: { xs: "100%", md: "45%" }, // Responsive width
          borderRadius: "12px",
          boxShadow: 3,
        }}
      />

      {/* Right Side - Text & Button */}
      <Box sx={{ maxWidth: "500px" }}>
        <GradientText variant="h4">Unlock Your Coding Potential!</GradientText>
        <Typography variant="body1" color="text.secondary" sx={{ my: 2 }}>
          Get personalized recommendations tailored to your learning path.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ fontWeight: "bold", borderRadius: "8px", px: 4, py: 1 }}
        >
          Get Recommendation
        </Button>
      </Box>
    </Container>
  );
};

export default Recommendation;
