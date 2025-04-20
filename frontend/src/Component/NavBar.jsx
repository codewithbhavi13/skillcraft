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
  Box,
  Divider,
  ListItemButton,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaUserCircle } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeContext } from "../context/ThemeContext";
import logo from "../assets/logo.png"; // Updated PNG logo;
import { UserContext } from "../context/UserContext";
import Cookies from "js-cookie";
import {
  deepOrange,
  deepPurple,
  green,
  blue,
  pink,
  amber,
  indigo,
  teal,
  grey,
} from "@mui/material/colors";

const navItems = ["Home", "Tutorial", "Blog", "About Us", "Dashboard"];
const avatarColors = [
  deepOrange[500],
  deepPurple[500],
  green[500],
  blue[500],
  pink[500],
  amber[500],
  indigo[500],
  teal[500],
];

const avatarColor = avatarColors.at(
  parseInt((Math.random() * avatarColors.length).toFixed())
);

const NavBar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleDrawer = () => {
    setMobileOpen((prev) => !prev);
  };

  const { isLogin, userDetails } = useContext(UserContext);
  const drawer = (
    <Box onClick={toggleDrawer} sx={{ textAlign: "center", width: 250 }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SkillCraft
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={Link}
              to={`/${item.toLowerCase().replace(" ", "")}`}
              onClick={toggleDrawer}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="relative"
      color={darkMode ? "primary" : "default"}
      sx={{ padding: "1px 10px", boxShadow: "none", zIndex: 10 }}
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
          onClick={() => toggleDrawer(true)}
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
          {navItems.map((text, index) => (
            <Button
              key={index}
              color="inherit"
              component={Link}
              to={
                text === "Dashboard" && userDetails.role === "admin"
                  ? "/admin"
                  : `/${text.toLowerCase().replace(" ", "")}`
              }
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
          ))}
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
            {isLogin ? (
              <Avatar
                sx={{
                  fontSize: 16,
                  height: 34,
                  width: 34,

                  bgcolor: avatarColor,
                }}
              >
                {userDetails.username.charAt(0).toUpperCase()}
              </Avatar>
            ) : (
              <FaUserCircle size={24} />
            )}
          </IconButton>

          {isLogin ? (
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
                Cookies.remove("authtoken");
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

      <Drawer
        anchor="left"
        open={mobileOpen}
        title="SkillCraft"
        onClose={toggleDrawer}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
