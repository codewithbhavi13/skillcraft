import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import { UserContext } from "./context/UserContext";
import SideNavigation from "./Component/SideNavigation";
import { OpenedTutorialProvider } from "./context/OpenedTutorialContext";
import QuizPage from "./Pages/QuizPage";
import UserDashboard from "./Pages/UserDashboard";
import Footer from "./Pages/Footer";

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
              <Route
                index
                element={
                  <OpenedTutorialProvider>
                    <Tutorial />
                  </OpenedTutorialProvider>
                }
              />
              <Route
                path=":chapter"
                element={
                  <OpenedTutorialProvider>
                    <SideNavigation />
                  </OpenedTutorialProvider>
                }
              >
                <Route
                  index
                  element={
                    <OpenedTutorialProvider>
                      <ChapterPage />
                    </OpenedTutorialProvider>
                  }
                />
                <Route
                  path=":topic"
                  element={
                    <OpenedTutorialProvider>
                      <TopicPage />
                    </OpenedTutorialProvider>
                  }
                />
              </Route>
            </Route>
          </Route>
          <Route path="/tutorial/:tutorial">
            <Route
              index
              element={
                <OpenedTutorialProvider>
                  <Tutorial />
                </OpenedTutorialProvider>
              }
            />
            <Route
              path="quiz"
              element={
                <OpenedTutorialProvider>
                  <QuizPage />
                </OpenedTutorialProvider>
              }
            />

            <Route
              path=":chapter"
              element={
                <OpenedTutorialProvider>
                  <SideNavigation />
                </OpenedTutorialProvider>
              }
            >
              <Route
                index
                element={
                  <OpenedTutorialProvider>
                    <ChapterPage />
                  </OpenedTutorialProvider>
                }
              />
              <Route
                path=":topic"
                element={
                  <OpenedTutorialProvider>
                    <TopicPage />
                  </OpenedTutorialProvider>
                }
              />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </BlogProvider>
    </ThemeProviderComponent>
  );
}

export default App;
