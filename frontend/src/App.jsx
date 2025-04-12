import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProviderComponent } from "./context/ThemeContext";
import Navbar from "./Component/NavBar";
import HomePage from "./Pages/HomePage";
import TutorialPage from "./Pages/TutorialPage";
import BlogPage from "./Pages/BlogPage";
import Login from "./Pages/Login";
import SignupPage from "./Pages/SignupPage";
import AdminDashboard from "./Pages/AdminDashboard";
import AboutUs from "./Pages/AboutUs";
import BlogDetail from "./Pages/BlogDetail";
import { BlogProvider } from "./context/BlogContex";
import CoursePage from "./Pages/CoursePage";
import Tutorial from "./Pages/Tutorial";
import TopicPage from "./Pages/TopicPage";
import ChapterPage from "./Pages/ChapterPage";
import UserDashboard from "./Pages/UserDashboard";

function App() {
  return (
    <ThemeProviderComponent>
      <BlogProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/tutorial" element={<TutorialPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          <Route path="/course/:course">
            <Route index element={<CoursePage />} />
            <Route path=":tutorial">
              <Route index element={<Tutorial />} />
              <Route path=":chapter">
                <Route index element={<ChapterPage />} />
                <Route path=":topic" element={<TopicPage />} />
              </Route>
            </Route>
          </Route>
          <Route path="/tutorial/:tutorial">
            <Route index element={<Tutorial />} />
            <Route path=":chapter">
              <Route index element={<ChapterPage />} />
              <Route path=":topic" element={<TopicPage />} />
            </Route>
          </Route>
        </Routes>
      </BlogProvider>
    </ThemeProviderComponent>
  );
}

export default App;
