import React, { useState } from "react";


import Recommendation from "../Component/Recommendation";
import SpecialFeature from "../Component/SpecialFeature";
import FAQSection from "../Component/FAQSection";

const HomePage = () => {
  
  return (
    <>
    <Recommendation/>
    <SpecialFeature/>
    <FAQSection/>
    {/* <SpecialFeature/> */}
    </>
  );
};

export default HomePage;
