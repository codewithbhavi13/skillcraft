import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { OpenedTutorialContext } from "../context/OpenedTutorialContext";
import { ExpandMore, ExpandLess, Lock } from "@mui/icons-material";

//TODO check for isUnlocked and lock the chapter and item in navigation
export default function SideNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const { tutorial, isChapterUnlocked, isTopicCompleted } = useContext(
    OpenedTutorialContext
  );
  const [openChapters, setOpenChapters] = useState({});

  const handleToggle = (index) => {
    setOpenChapters((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const getBasePath = () => {
    const pathParts = location.pathname.split("/");

    // Keep only the parts before chapter-X or topic-X
    let basePath = "";
    for (let i = 0; i < pathParts.length; i++) {
      if (
        pathParts[i].startsWith("chapter-") ||
        pathParts[i].startsWith("topic-")
      ) {
        break;
      }
      basePath += pathParts[i] + "/";
    }
    return basePath;
  };

  const goToChapter = (chapterNumber) => {
    const basePath = getBasePath();
    const newPath = `${basePath}chapter-${chapterNumber}`;
    navigate(newPath);
  };

  const goToTopic = (chapterNumber, topicNumber) => {
    const basePath = getBasePath();
    const newPath = `${basePath}chapter-${chapterNumber}/topic-${topicNumber}`;
    navigate(newPath);
  };
  const theme = useTheme();
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "3fr 7fr" }}>
      <Box
        sx={{
          borderRight: "1px solid",
          borderRightColor:
            theme.palette.mode === "dark" ? "grey.500" : "primary.main",
        }}
      >
        {tutorial?.chapters?.map((chapter, chapterIndex) => {
          const isUnlocked = isChapterUnlocked(chapter.name);
          return (
            <React.Fragment key={chapterIndex}>
              <ListItem
                secondaryAction={
                  <IconButton onClick={() => handleToggle(chapterIndex)}>
                    {openChapters[chapterIndex] ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )}
                  </IconButton>
                }
                sx={{ pr: 2 }}
                disablePadding
              >
                <ListItemButton
                  onClick={() => {
                    goToChapter(chapterIndex + 1);
                  }}
                  disabled={!isUnlocked}
                  dense
                >
                  <ListItemText
                    primary={
                      "Chapter " + (chapterIndex + 1) + ": " + chapter.name
                    }
                  />

                  <ListItemIcon>
                    {!isUnlocked && (
                      <Lock edge="start" tabIndex={-1} sx={{ ml: "auto" }} />
                    )}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>

              <Collapse
                in={openChapters[chapterIndex]}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" sx={{ pl: 6 }} disablePadding>
                  {chapter?.topics?.map((topic, topicIndex) => {
                    const isCompleted = isTopicCompleted(
                      chapter.name,
                      topic.name
                    );
                    return (
                      <ListItem disablePadding key={topicIndex}>
                        <ListItemButton
                          onClick={() =>
                            goToTopic(chapterIndex + 1, topicIndex + 1)
                          }
                          disabled={!isCompleted}
                          dense
                        >
                          <ListItemText primary={topic.name} key={topicIndex} />
                          <ListItemIcon>
                            {!isCompleted && (
                              <Lock
                                edge="start"
                                tabIndex={-1}
                                sx={{ ml: "auto" }}
                              />
                            )}
                          </ListItemIcon>
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </React.Fragment>
          );
        })}
      </Box>
      <Outlet />
    </Box>
  );
}
