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
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaUserCircle } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeContext } from "../context/ThemeContext";
import logo from "../assets/logo.svg";
import { UserContext } from "../context/UserContext";

const navItems = ["Home", "Tutorial", "Blog", "About Us"];

const NavBar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleDrawer = () => {
    setMobileOpen((prev) => !prev);
  };

  const { isLogin } = useContext(UserContext);
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
          onClick={toggleDrawer}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo & Brand Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src={logo} alt="SkillCraft Logo" style={{ height: "40px" }} />
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textDecoration: "none",
              color: darkMode ? "#fff" : "#333",
            }}
            component={Link}
            to="/"
          >
            SkillCraft
          </Typography>
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
          ))}

          {isLogin && (
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
              onClick={() => {}}
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
