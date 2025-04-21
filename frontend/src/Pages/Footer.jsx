// components/Footer.jsx
import React, { useContext } from "react";
import {
  Box,
  Typography,
  Grid,
  Link,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { pathname } = useLocation();
  const { darkMode } = useContext(ThemeContext);
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#121212",
        color: "#f5f5f5",
        px: { xs: 2, sm: 6 },
        py: { xs: 4, sm: 6 },
        mt: "auto",
        ml: pathname.includes("/admin") && "250px",
      }}
    >
      <Grid container spacing={6}>
        {/* Brand Info */}
        <Grid item xs={12} md={4}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            SkillCraft
          </Typography>
          <Typography variant="body2" color="gray">
            Personalized learning platform to help coders level up with
            interactive tutorials, smart recommendations, and expert blogs.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Stack spacing={1}>
            <Link underline="hover" color="inherit">
              <NavLink
                style={{
                  color: darkMode ? "white" : "black",
                  textDecoration: "none",
                }}
                to={"/"}
              >
                Home
              </NavLink>
            </Link>
            <Link underline="hover" color="inherit">
              <NavLink
                style={{
                  color: darkMode ? "white" : "black",
                  textDecoration: "none",
                }}
                to={"/tutorial"}
              >
                Tutorials
              </NavLink>
            </Link>
            <Link underline="hover" color="inherit">
              <NavLink
                style={{
                  color: darkMode ? "white" : "black",
                  textDecoration: "none",
                }}
                to={"/blog"}
              >
                Blog
              </NavLink>
            </Link>
            <Link underline="hover" color="inherit">
              <NavLink
                style={{
                  color: darkMode ? "white" : "black",
                  textDecoration: "none",
                }}
                to={"/aboutus"}
              >
                About Us
              </NavLink>
            </Link>
            <Link href="/login" underline="hover" color="inherit">
              <NavLink
                style={{
                  color: darkMode ? "white" : "black",
                  textDecoration: "none",
                }}
                to={"/login"}
              >
                Login / Register
              </NavLink>
            </Link>
          </Stack>
        </Grid>

        {/* Social Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Connect with Us
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener"
              sx={{ color: "#f5f5f5", "&:hover": { color: "#9c27b0" } }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener"
              sx={{ color: "#f5f5f5", "&:hover": { color: "#0a66c2" } }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="mailto:skillcraft.learn@gmail.com"
              sx={{ color: "#f5f5f5", "&:hover": { color: "#f44336" } }}
            >
              <Email />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>

      {/* Divider and Copyright */}
      <Divider sx={{ my: 4, borderColor: "#333" }} />
      <Typography variant="caption" color="gray" align="center" display="block">
        &copy; {new Date().getFullYear()} SkillCraft. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
