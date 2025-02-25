import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CourseContext } from "../context/CourseContext";
import { useNavigate, useParams } from "react-router-dom";
import { ExpandLess, ExpandMore, NineKRounded } from "@mui/icons-material";

export default function Tutorial() {
  const { tutorials } = useContext(CourseContext);
  const parms = useParams();
  const navigate = useNavigate();
  const [tutorial, setTutorial] = useState({});

  const [openChapters, setOpenChapters] = useState({});

  // Function to toggle chapter open/close
  const handleToggle = (index) => {
    setOpenChapters((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle state for the specific chapter
    }));
  };
  useEffect(() => {
    setTutorial(
      tutorials.find(
        (item) =>
          item.title.toLowerCase() === parms.tutorial.replaceAll("-", " ")
      )
    );
  }, [tutorials]);
  console.log(tutorial);
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: 400,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 4,
        }}
      >
        <img
          src={tutorial?.thumbnail}
          alt="background"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            filter: "blur(5px)",
            opacity: 0.4,
            left: 0,
          }}
        />

        <Typography variant="h3" gutterBottom>
          {tutorial?.title}
        </Typography>

        <Typography variant="body1" color="text.secondary">
          {tutorial?.description}
        </Typography>
      </Box>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Chapters
        </Typography>
        <List>
          {tutorial?.chapters?.map((chapter, index) => (
            <React.Fragment key={index}>
              <ListItem
                secondaryAction={
                  <IconButton onClick={() => handleToggle(index)}>
                    {openChapters[index] ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                }
              >
                <ListItemButton
                  role={undefined}
                  onClick={() => {
                    navigate("chapter-" + (index + 1));
                  }}
                  dense
                >
                  <ListItemText
                    primary={"Chapter " + (index + 1) + ": " + chapter.name}
                  />

                  {/* <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.includes(value)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon> */}
                </ListItemButton>
              </ListItem>

              <Collapse in={openChapters[index]} timeout="auto" unmountOnExit>
                <List component="div" sx={{ pl: 6 }} disablePadding>
                  {chapter?.topics?.map((topic, index) => (
                    <ListItemText primary={topic.name} key={index} />
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
}
