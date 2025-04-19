import React, { useContext, useRef, useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import {
  AutoAwesome,
  School,
  TrackChanges,
  Chat,
  Article,
} from "@mui/icons-material";
import { ThemeContext } from "../context/ThemeContext";

const features = [
  {
    title: "Career Recommendations",
    icon: <AutoAwesome fontSize="large" />,
    description: "Get learning paths based on skills and goals.",
  },
  {
    title: "Interactive Tutorials",
    icon: <School fontSize="large" />,
    description: "Step-by-step coding exercises from beginner to expert.",
  },
  {
    title: "Progress Tracking",
    icon: <TrackChanges fontSize="large" />,
    description: "Monitor your progress and coding milestones.",
  },
  {
    title: "AI Chatbot Assistant",
    icon: <Chat fontSize="large" />,
    description: "Instant coding help and project suggestions.",
  },
  {
    title: "Blogs & Insights",
    icon: <Article fontSize="large" />,
    description: "Stay updated with industry trends and coding tips.",
  },
];

const SpecialFeatures = () => {
  const { darkMode } = useContext(ThemeContext);
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    const scrollAmount = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({
      left: scrollAmount * index,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % features.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 5,
        bgcolor: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "white" : "black",
        position: "relative",
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Why Choose SkillCraft?
      </Typography>
      <Typography variant="subtitle1" mb={4}>
        Explore powerful features designed to enhance your coding journey.
      </Typography>

      {/* Feature Cards */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflow: "hidden",
          gap: 2,
          width: "80%",
          margin: "auto",
        }}
      >
        {features.map((feature, index) => (
          <Card
            key={index}
            sx={{
              minWidth: "32%",
              flex: "0 0 32%",
              bgcolor: darkMode ? "#1E1E1E" : "white",
              color: darkMode ? "white" : "black",
              borderRadius: 3,
              p: 2,
              textAlign: "center",
              boxShadow: darkMode
                ? "0px 4px 10px rgba(255,255,255,0.2)"
                : "0px 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <IconButton sx={{ color: "#4FC3F7", mb: 1 }}>
              {feature.icon}
            </IconButton>
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
    </Box>
  );
};

export default SpecialFeatures;
