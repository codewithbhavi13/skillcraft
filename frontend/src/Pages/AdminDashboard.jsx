import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import SideBar from "../Component/SideBar";
import Dashboard from "../Component/UserDashboard/UserDetails";
import ManageCourse from "../Component/ManageCourse";
import ManageBlog from "../Component/ManageBlog";
import UserManage from "../Component/UserManage";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext
import AdminDashboardContainer from "../Component/AdminDashboard/AdminDashboardContainer";

const AdminDashboard = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
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
        }}
      >
        <Routes>
          <Route path="/" element={<AdminDashboardContainer />} />
          <Route path="dashboard" element={<AdminDashboardContainer />} />

          <Route path="manage-blog" element={<ManageBlog />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
