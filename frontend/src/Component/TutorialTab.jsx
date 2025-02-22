import React, { useContext, useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import CourseGrid from './CourseGrid';
import { CourseContext } from '../context/CourseContext';

const TutorialTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Sample course data
  const {courses} = useContext(CourseContext)
  console.log(courses)

  // Filter courses based on active tab
  const getFilteredCourses = () => {
    switch (activeTab) {
      case 0:
        return courses.filter(course => course.category.toLowerCase() === 'web development');
      case 1:
        return courses.filter(course => course.category.toLowerCase() === 'backend development');
      case 2:
        return courses; // For simplicity, show all courses as recommended
      default:
        return courses;
    }
  };

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Tabs value={activeTab} onChange={handleTabChange} centered>
        <Tab label="Most Popular" />
        <Tab label="Best Seller" />
        <Tab label="Recommended for You" />
      </Tabs>
      <TabPanel value={activeTab} index={0}>
        <CourseGrid courses={getFilteredCourses()} />
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <CourseGrid courses={getFilteredCourses()} />
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        <CourseGrid courses={getFilteredCourses()} />
      </TabPanel>
    </Box>
  );
};

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

export default TutorialTabs;
