import {
  Box,
  Button,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";

import { Done, ExpandLess, ExpandMore, Lock } from "@mui/icons-material";
import { OpenedTutorialContext } from "../context/OpenedTutorialContext";
import { useNavigate } from "react-router-dom";
export default function Tutorial() {
  const navigate = useNavigate();

  const {
    isChapterCompleted,
    isChapterUnlocked,

    handleGetEnrolled,
    handleToggle,
  } = useContext(OpenedTutorialContext);
  const { openChapters, enrollLoading, isEnrolled, tutorial } = useContext(
    OpenedTutorialContext
  );

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
        <Button
          variant="contained"
          size="large"
          endIcon={<></>}
          loading={enrollLoading}
          disabled={isEnrolled}
          sx={{ display: "inline", width: "fit-content", mt: 2 }}
          onClick={handleGetEnrolled}
        >
          Get Enroll
        </Button>
      </Box>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Chapters
        </Typography>
        <List>
          {tutorial?.chapters?.map((chapter, index) => {
            const isUnlocked = isChapterUnlocked(chapter.name);
            return (
              <React.Fragment key={index}>
                <ListItem
                  secondaryAction={
                    <IconButton onClick={() => handleToggle(index)}>
                      {openChapters[index] ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  }
                  sx={{ pr: 2 }}
                  disablePadding
                >
                  <ListItemButton
                    role={undefined}
                    onClick={() => {
                      navigate("chapter-" + (index + 1));
                    }}
                    disabled={!isUnlocked}
                    dense
                  >
                    <ListItemText
                      primary={"Chapter " + (index + 1) + ": " + chapter.name}
                    />

                    <ListItemIcon>
                      {!isUnlocked && (
                        <Lock
                          edge="start"
                          checked={true}
                          tabIndex={-1}
                          sx={{ ml: "auto" }}
                        />
                      )}
                      {isChapterCompleted(chapter.name) && (
                        <Done sx={{ ml: "auto" }} />
                      )}
                    </ListItemIcon>
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
            );
          })}
        </List>
      </Box>
    </Box>
  );
}
