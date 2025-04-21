import React, { useContext, useEffect, useRef, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid2,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import UserDetailsCard from "./UserDetailsCard";
import {
  deepOrange,
  deepPurple,
  green,
  blue,
  pink,
  amber,
  indigo,
  teal,
} from "@mui/material/colors";
import { BarChart } from "@mui/x-charts";
import { ThemeContext } from "../../context/ThemeContext";

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
const options = ["AI & ML", "DevOps", "Web Development", "Cyber Security"];
export default function AdminDashboardContainer() {
  const { darkMode } = useContext(ThemeContext);
  const { users, feedbacks } = useContext(AdminContext);
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef(null);
  const careerCounts = options.map((option) => {
    return users.filter((user) => user.selectedCareer === option).length;
  });
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setMaxHeight(containerRef.current.scrollHeight);
    }
  }, [expanded]);

  return (
    <Box>
      <Typography variant="h5">Users Progress</Typography>
      <Box>
        <Grid2 container sx={{ my: 2 }} spacing={2}>
          {users.map((user, index) => (
            <Grid2 key={index} size={{ xs: 12, md: 6 }}>
              <UserDetailsCard
                name={user.username}
                selectedCareer={user.selectedCareer}
                enrolledTutorials={user.enrolledTutorials}
                key={1}
              />
            </Grid2>
          ))}
        </Grid2>
      </Box>

      <Typography variant="h6" gutterBottom>
        Career Selections by Users
      </Typography>
      <BarChart
        xAxis={[
          {
            id: "career",
            data: options,
            scaleType: "band",
            label: "Career Options",
            categoryGapRatio: 0.7,
          },
        ]}
        series={[
          {
            data: careerCounts,
            label: "Number of Users",
          },
        ]}
        width={500}
        height={300}
      />

      <Typography variant="h6">Feedbacks</Typography>
      <Box sx={{ position: "relative", width: "100%" }}>
        {/* Feedback Masonry container */}
        <Box
          sx={{
            height: expanded ? `${maxHeight}` : 400,
            overflow: "hidden",

            transition: "max-height 0.3s ease",
          }}
        >
          <Box
            sx={{
              columnCount: { xs: 1, sm: 2, md: 3 },
              columnGap: 2,
              position: "relative",
            }}
            ref={containerRef}
          >
            {feedbacks.map((feedback, index) => (
              <Card
                key={index}
                sx={{
                  mb: 2,
                  breakInside: "avoid",
                }}
              >
                <CardContent>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ alignItems: "center", mb: 1 }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: avatarColors[index % avatarColors.length],
                      }}
                    >
                      {feedback.username.charAt(0)}
                    </Avatar>
                    <Typography variant="subtitle1">
                      {feedback.username}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {feedback.message}
                  </Typography>
                  <Rating value={feedback.rating} readOnly />
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Gradient overlay */}
        {!expanded && (
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 300,
              background: `linear-gradient(to top, ${
                darkMode ? "black" : "white"
              }, transparent)`,
            }}
          />
        )}

        {/* Show More/Less Button */}
        <Box textAlign="center" mt={2}>
          <Button
            variant="outlined"
            sx={{ borderRadius: "23px" }}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less" : "Show More"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
