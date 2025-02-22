import React from 'react';
import { Container } from '@mui/material';
import HeroSection from '../Component/HeroSection';
import TutorialTabs from '../Component/TutorialTab';

const TutorialPage = () => {
  return (
    <>
      <HeroSection />
      <Container>
        <TutorialTabs />
        {/* Add more components like Explore All Courses here */}
      </Container>
    </>
  );
};

export default TutorialPage;
