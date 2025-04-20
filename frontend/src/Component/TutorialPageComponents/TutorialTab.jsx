import React, { useContext, useState } from "react";
import { Box, Tabs, Tab, Typography, Stack, Grid2 } from "@mui/material";
import CourseGrid from "./CourseGrid";
import { CourseContext } from "../../context/CourseContext";
import CourseCard from "../Cards/CourseCard";
import TutorialCard from "../Cards/TutorialCard";
import { UserContext } from "../../context/UserContext";

const TutorialTabs = () => {
  const { courses, tutorials } = useContext(CourseContext);
  const [activeTab, setActiveTab] = useState(0);
  const { selectedCareer } = useContext(UserContext).userDetails;

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const recommandedTutorials = tutorials.filter(
    (item) => item.category === selectedCareer
  );

  const getFilteredCourses = () => {
    switch (activeTab) {
      case 0:
        return courses.filter(
          (course) => course.category.toLowerCase() === "web development"
        );
      case 1:
        return courses.filter((item) => item.category === selectedCareer); // For simplicity, show all courses as recommended
      default:
        return courses;
    }
  };

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Tabs value={activeTab} onChange={handleTabChange} centered>
        <Tab label="Most Popular" />
        <Tab label="Recommended for You" />
      </Tabs>
      <TabPanel value={activeTab} index={0}>
        <CourseGrid courses={getFilteredCourses()} />
      </TabPanel>

      <TabPanel value={activeTab} index={1}>
        <Typography
          sx={{
            mb: 2,
          }}
          variant="h4"
          component="h4"
        >
          Courses
        </Typography>
        <Box
          sx={{
            overflowX: "auto",
            whiteSpace: "nowrap",
            scrollbarWidth: "none", // Hides scrollbar in Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Hides scrollbar in Chrome, Safari, Edge
            },
          }}
        >
          <Stack direction="row" spacing={2} sx={{ display: "inline-flex" }}>
            {getFilteredCourses().map((item, index) => (
              <CourseCard key={index} width={300} course={item} />
            ))}
          </Stack>
        </Box>
        <Typography
          sx={{
            mb: 2,
            mt: 5,
          }}
          variant="h4"
          component="h4"
        >
          Tutorials
        </Typography>
        <Box
          sx={{
            overflowX: "auto",
            whiteSpace: "nowrap",
            scrollbarWidth: "none", // Hides scrollbar in Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Hides scrollbar in Chrome, Safari, Edge
            },
          }}
        >
          <Grid2
            container
            spacing={{ xs: 1, md: 2, xl: 3 }}
            sx={{ flexWrap: "nowrap" }}
          >
            {recommandedTutorials.map((item, index) => (
              <Grid2
                sx={{
                  minWidth: 300,
                }}
                key={index}
              >
                <TutorialCard key={index} width={300} tutorial={item} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </TabPanel>
    </Box>
  );
};

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export default TutorialTabs;
