import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import SideBar from "../Component/SideBar";
import Dashboard from "../Component/Dashboard";
import ManageCourse from "../Component/ManageCourse";
import ManageBlog from "../Component/ManageBlog";
import ManageRecommendation from "../Component/ManageRecommendation";
import UserManage from "../Component/UserManage";
import SettingsPage from "../Component/SettingsPage";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext

const AdminDashboard = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: darkMode ? "#1e1e2f" : "#f5f5f5" }}>
      <CssBaseline />

      {/* Sidebar */}
      <SideBar />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - 250px)`, 
          marginLeft: "250px", 
          marginTop: "64px", // Adjust for Navbar height
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="manage-courses" element={<ManageCourse />} />
          <Route path="manage-blog" element={<ManageBlog />} />
          <Route path="recommendation" element={<ManageRecommendation />} />
          <Route path="user-management" element={<UserManage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
