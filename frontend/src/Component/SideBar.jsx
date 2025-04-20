import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Switch,
} from "@mui/material";
import {
  FaTachometerAlt,
  FaBook,
  FaBlog,
  FaUsers,
  FaCog,
  FaLightbulb,
} from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext

const Sidebar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Drawer variant="permanent" sx={{ zIndex: 3, width: "250px" }}>
      <div style={{ height: 64, width: "250px" }}></div>

      {/* Sidebar Title (No Icons) */}
      <Toolbar sx={{ padding: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Admin Panel
        </Typography>
      </Toolbar>

      {/* Sidebar Menu */}
      <List sx={{ width: "100%" }}>
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            component={Link}
            to={item.path}
            sx={{
              "&:hover": { backgroundColor: darkMode ? "#2a2a3a" : "#ddd" },
            }}
          >
            <ListItemIcon sx={{ color: darkMode ? "white" : "black" }}>
              {item.icon}
            </ListItemIcon>
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
  { label: "Manage Blog", path: "/admin/manage-blog", icon: <FaBlog /> },
];

export default Sidebar;
