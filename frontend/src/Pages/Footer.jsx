// components/Footer.jsx
import React from "react";
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

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#121212",
        color: "#f5f5f5",
        px: { xs: 2, sm: 6 },
        py: { xs: 4, sm: 6 },
        mt: "auto",
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
            <Link href="/" underline="hover" color="inherit">
              Home
            </Link>
            <Link href="/tutorial" underline="hover" color="inherit">
              Tutorials
            </Link>
            <Link href="/blog" underline="hover" color="inherit">
              Blog
            </Link>
            <Link href="/aboutus" underline="hover" color="inherit">
              About Us
            </Link>
            <Link href="/login" underline="hover" color="inherit">
              Login / Register
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
