import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaUserCircle } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeContext } from "../context/ThemeContext";
import logo from "../assets/logo.png"; // Updated PNG logo

const NavBar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMobileOpen(open);
  };

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <AppBar
      position="static"
      color={darkMode ? "primary" : "default"}
      sx={{ padding: "1px 10px", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo & Brand Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={logo}
            alt="SkillCraft Logo"
            style={{
              height: "60px", // Increase the height for better visibility
              width: "auto",
              marginLeft: "15px", // Add left margin to align properly
              cursor: "pointer", // Optional: Add rounded corners if needed
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          {["Home", "Tutorial", "Blog", "About Us", "UserDashboard"].map(
            (text, index) => (
              <Button
                key={index}
                color="inherit"
                component={Link}
                to={`/${text.toLowerCase().replace(" ", "")}`}
                sx={{
                  fontSize: "1.2rem",
                  textTransform: "none",
                  fontWeight: "500",
                  color: darkMode ? "#ddd" : "#444",
                  "&:hover": { color: darkMode ? "#fff" : "#000" },
                  display: { xs: "none", md: "inline-flex" },
                }}
              >
                {text}
              </Button>
            )
          )}

          {isLoggedIn && (
            <Button
              color="inherit"
              component={Link}
              to="/admin"
              sx={{
                fontSize: "1.2rem",
                textTransform: "none",
                fontWeight: "500",
                color: darkMode ? "#ddd" : "#444",
                "&:hover": { color: darkMode ? "#fff" : "#000" },
                display: { xs: "none", md: "inline-flex" },
              }}
            >
              Dashboard
            </Button>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconButton
            color="inherit"
            onClick={toggleTheme}
            title="Toggle Theme"
          >
            {darkMode ? <FaSun size={24} /> : <FaMoon size={22} />}
          </IconButton>

          <IconButton
            color="inherit"
            component={Link}
            to="/admin"
            title="Profile"
          >
            <FaUserCircle size={24} />
          </IconButton>

          {isLoggedIn ? (
            <Button
              variant="contained"
              color="error"
              sx={{
                fontSize: "1rem",
                padding: "8px 16px",
                borderRadius: "8px",
                fontWeight: "bold",
                boxShadow: "none",
              }}
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/login"
              sx={{
                backgroundColor: "lightblue",
                fontSize: "1rem",
                padding: "8px 16px",
                borderRadius: "8px",
                fontWeight: "bold",
                boxShadow: "none",
              }}
            >
              Login
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
