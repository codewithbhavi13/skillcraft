import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CourseContext } from "../context/CourseContext";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function ChapterPage() {
  const parms = useParams();
  const location = useLocation();

  const { tutorials } = useContext(CourseContext);
  const navigate = useNavigate();
  const [chapter, setChapter] = useState({});
  const [tutorial, setTutorial] = useState({});
  const [chapterIndex, setChapterIndex] = useState({});

  const jumpToPreviousChapter = () => {
    navigate(location.pathname.slice(0, -1) + chapterIndex);
  };
  const jumpToFirstTopic = () => {
    navigate("topic-1");
  };
  useEffect(() => {
    const tutorial = tutorials.find(
      (item) => item.title.toLowerCase() === parms.tutorial.replaceAll("-", " ")
    );

    setTutorial(tutorial);

    // const chapter = tutorial.find((item) => item.)
    const newChapterIndex = parseInt(parms.chapter.at(-1)) - 1;

    if (isNaN(newChapterIndex)) {
      console.error("error");
      return;
    }
    setChapterIndex(newChapterIndex);
    const chapter = tutorial?.chapters[newChapterIndex];
    setChapter(chapter);
  }, [tutorials, location.pathname]);
  return (
    <Stack
      sx={{
        p: 2,
        flexGrow: 1,
        minHeight: window.innerHeight - 66,
        justifyContent: "space-between",
      }}
      height={"100%"}
    >
      <Box>
        <Typography variant="h4" gutterBottom>
          Chapter {chapterIndex + 1 + ": " + chapter?.name}
        </Typography>
        <ul>
          {chapter?.topics?.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </Box>
      <Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}>
        <Button
          disabled={chapterIndex === 0}
          onClick={jumpToPreviousChapter}
          variant="outlined"
        >
          Previous
        </Button>

        <Button
          disabled={-1 === chapterIndex}
          variant="outlined"
          onClick={jumpToFirstTopic}
        >
          Start
        </Button>
      </Stack>
    </Stack>
  );
}
