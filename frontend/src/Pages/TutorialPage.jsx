import React, { useContext, useEffect } from "react";
import { Container } from "@mui/material";
import HeroSection from "../Component/HeroSection";
import TutorialTabs from "../Component/TutorialPageComponents/TutorialTab";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { MessageContext } from "../context/MessageContext";

const TutorialPage = () => {
  const navigate = useNavigate();
  const { setWarningMsg } = useContext(MessageContext);
  const { isLogin } = useContext(UserContext);
  useEffect(() => {
    if (!isLogin) {
      setWarningMsg("Please Login First");
      navigate("/login");
    }
  }, [isLogin]);
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
