import React, { useContext, useRef } from "react";
import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import { AutoAwesome, School, TrackChanges, Chat, Article, ArrowBack, ArrowForward } from "@mui/icons-material";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext

const features = [
  { title: "AI-Powered Recommendations", icon: <AutoAwesome fontSize="large" />, description: "Get learning paths based on skills and goals." },
  { title: "Interactive Tutorials", icon: <School fontSize="large" />, description: "Step-by-step coding exercises from beginner to expert." },
  { title: "Progress Tracking", icon: <TrackChanges fontSize="large" />, description: "Monitor your progress and coding milestones." },
  { title: "AI Chatbot Assistant", icon: <Chat fontSize="large" />, description: "Instant coding help and project suggestions." },
  { title: "Blogs & Insights", icon: <Article fontSize="large" />, description: "Stay updated with industry trends and coding tips." }
];

const SpecialFeatures = () => {
  const { darkMode } = useContext(ThemeContext); // Get darkMode state
  const scrollRef = useRef(null); // Ref for scrolling container

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth; // Scroll by container width
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 5,
        bgcolor: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "white" : "black",
        position: "relative"
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Why Choose SkillCraft?
      </Typography>
      <Typography variant="subtitle1" mb={4}>
        Explore powerful features designed to enhance your coding journey.
      </Typography>

      {/* Scroll Buttons */}
      <IconButton
        onClick={() => handleScroll("left")}
        sx={{
          position: "absolute",
          left: 10,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          bgcolor: "white",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
        }}
      >
        <ArrowBack sx={{ fontSize: 30, color: darkMode ? "black" : "black" }} />
      </IconButton>

      {/* Feature Cards Wrapper */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflow: "hidden", // Hides extra cards
          gap: 2,
          width: "80%", // Set container width to show 3 cards
          margin: "auto"
        }}
      >
        {features.map((feature, index) => (
          <Card
            key={index}
            sx={{
              minWidth: "32%", // Ensures 3 cards are visible
              flex: "0 0 32%",
              bgcolor: darkMode ? "#1E1E1E" : "white",
              color: darkMode ? "white" : "black",
              borderRadius: 3,
              p: 2,
              textAlign: "center",
              boxShadow: darkMode ? "0px 4px 10px rgba(255,255,255,0.2)" : "0px 4px 10px rgba(0,0,0,0.1)"
            }}
          >
            <IconButton sx={{ color: "#4FC3F7", mb: 1 }}>{feature.icon}</IconButton>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {feature.title}
              </Typography>
              <Typography variant="body2" mt={1} color="gray">
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <IconButton
        onClick={() => handleScroll("right")}
        sx={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          bgcolor: "white",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
        }}
      >
        <ArrowForward sx={{ fontSize: 30, color: darkMode ? "black" : "black" }} />
      </IconButton>
    </Box>
  );
};

export default SpecialFeatures;
