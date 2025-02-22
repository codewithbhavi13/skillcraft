// src/components/SpecialFeature.js
import React, { useContext } from "react";
import { Card, CardContent, Typography, Grid, Box, CardActionArea } from '@mui/material';
import { ThemeContext } from "../context/ThemeContext";

const SpecialFeature = () => {
  const { darkMode } = useContext(ThemeContext);

  const features = [
    {
      icon: '🚀',
      title: 'Career Path Recommendations',
      description: 'Get tailored course suggestions based on your career goals.',
    },
    {
      icon: '🧠',
      title: 'AI-Powered Chatbot',
      description: 'Ask coding-related queries and get instant, accurate answers.',
    },
    {
      icon: '📈',
      title: 'Progress Tracking',
      description: 'Monitor your learning journey with detailed analytics.',
    },
  ];

  return (
    <section className={`special-features ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 2 }}
      >
        What Makes SkillCraft Unique?
      </Typography>
      <Grid container spacing={2}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <CardActionArea>
              <Card
                sx={{
                  maxWidth: 345,
                  margin: 'auto',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6, // Adjust the elevation on hover
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ fontSize: 40, textAlign: 'center' }}>
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ textAlign: 'center', fontWeight: 'bold' }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: 'center' }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default SpecialFeature;
