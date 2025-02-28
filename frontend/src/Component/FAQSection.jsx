import React, { useContext } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ThemeContext } from "../context/ThemeContext"; // Assuming you have a theme context

const faqs = [
  { question: "What is SkillCraft?", answer: "SkillCraft is a personalized learning platform for coders, offering AI-powered recommendations, interactive tutorials, and progress tracking." },
  { question: "How does the AI recommendation system work?", answer: "Our AI analyzes your coding journey and suggests learning paths tailored to your skills and goals." },
  { question: "Is SkillCraft free to use?", answer: "Yes! SkillCraft offers free access to tutorials, blogs, and learning resources. Some advanced features may require a subscription." },
  { question: "Can I track my coding progress?", answer: "Absolutely! Our platform includes a progress tracking module to help you monitor milestones and achievements." },
  { question: "Does SkillCraft provide certification?", answer: "We are working on certification features. Stay tuned for updates!" }
];

const FAQSection = () => {
  const { darkMode } = useContext(ThemeContext); // Get dark mode state

  return (
    <Box
      sx={{
        py: 6,
        bgcolor: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "white" : "black",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              bgcolor: darkMode ? "#1E1E1E" : "white",
              color: darkMode ? "white" : "black",
              boxShadow: darkMode ? "0px 4px 10px rgba(255,255,255,0.1)" : "0px 4px 10px rgba(0,0,0,0.1)",
              borderRadius: 2,
              mb: 2,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: darkMode ? "white" : "black" }} />}>
              <Typography fontWeight="bold">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default FAQSection;
