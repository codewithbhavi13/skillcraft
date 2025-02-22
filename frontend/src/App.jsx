import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProviderComponent } from "./context/ThemeContext";
import Navbar from "./Component/NavBar";  
import HomePage from "./Pages/HomePage";
import TutorialPage from "./Pages/TutorialPage";
import BlogPage from "./Pages/BlogPage";
import Login from "./Pages/Login";
import SignupPage from "./Pages/SignupPage";
import AdminDashboard from "./Pages/AdminDashboard";
import AboutUs from "./Pages/AboutUs";


function App() {
  return (
    <ThemeProviderComponent>
      <Router>
      <Navbar/>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/tutorial" element={<TutorialPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/aboutus" element={<AboutUs/>}/>
              <Route path="/admin/*" element={<AdminDashboard />} />
            </Routes>
      </Router>
    </ThemeProviderComponent>
  );
}

export default App;
