import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Switch } from "@mui/material";
import { FaTachometerAlt, FaBook, FaBlog, FaUsers, FaCog, FaLightbulb } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext

const Sidebar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        position: "fixed",
        top: "64px", // Adjust based on Navbar height
        height: "calc(100vh - 64px)", // Prevent overlapping Navbar
        "& .MuiDrawer-paper": {
          width: 250,
          backgroundColor: darkMode ? "#1e1e2f" : "#f5f5f5", // Dynamic background color
          color: darkMode ? "white" : "black",
          position: "relative",
        },
      }}
    >
      {/* Sidebar Title (No Icons) */}
      <Toolbar sx={{ padding: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Admin Panel
        </Typography>
      </Toolbar>

      {/* Sidebar Menu */}
      <List>
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            component={Link}
            to={item.path}
            sx={{
              color: darkMode ? "white" : "black",
              "&:hover": { backgroundColor: darkMode ? "#2a2a3a" : "#ddd" },
            }}
          >
            <ListItemIcon sx={{ color: darkMode ? "white" : "black" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

// Sidebar Menu Items
const menuItems = [
  { label: "Dashboard", path: "/admin/dashboard", icon: <FaTachometerAlt /> },
  { label: "Manage Courses", path: "/admin/manage-courses", icon: <FaBook /> },
  { label: "Manage Blog", path: "/admin/manage-blog", icon: <FaBlog /> },
  { label: "Recommendation", path: "/admin/recommendation", icon: <FaLightbulb /> },
  { label: "User Management", path: "/admin/user-management", icon: <FaUsers /> },
  { label: "Settings", path: "/admin/settings", icon: <FaCog /> },
];

export default Sidebar;
