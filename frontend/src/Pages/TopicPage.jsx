import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CourseContext } from "../context/CourseContext";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function TopicPage() {
  const parms = useParams();
  const location = useLocation();
  const { tutorials } = useContext(CourseContext);
  const navigate = useNavigate();
  const [topic, setTopic] = useState({});
  const [chapter, setChapter] = useState({});
  const [tutorial, setTutorial] = useState({});
  const [topicIndex, setTopicIndex] = useState(0);
  const [chapterIndex, setChapterIndex] = useState(0);
  const jumpToChapterPage = () => {
    navigate(location.pathname.replace(/\/topic-\d+$/, ""));
  };
  const jumpToNextChapter = () => {
    navigate(
      location.pathname.replace(/\/topic-\d+$/, "").slice(0, -1) +
        (chapterIndex + 2)
    );
  };
  console.log("last chapter: ");
  console.log("Chpaters Length", tutorial?.chapters?.length);
  console.log("Chapter index", chapterIndex);
  const jumpToPreviousTopic = () => {
    navigate(location.pathname.slice(0, -1) + topicIndex);
  };
  const jumpToNextTopic = () => {
    navigate(location.pathname.slice(0, -1) + (topicIndex + 2));
  };
  useEffect(() => {
    const tutorial = tutorials.find(
      (item) => item.title.toLowerCase() === parms.tutorial.replaceAll("-", " ")
    );
    setTutorial(tutorial);

    // const chapter = tutorial.find((item) => item.)
    const chapterIndex = parseInt(parms.chapter.at(-1)) - 1;
    const newTopicIndex = parseInt(parms.topic.at(-1)) - 1;

    if (isNaN(chapterIndex) && isNaN(newTopicIndex)) {
      console.error("error");
      return;
    }
    setChapterIndex(chapterIndex);
    setTopicIndex(newTopicIndex);
    const chapter = tutorial?.chapters[chapterIndex];
    setChapter(chapter);
    const topic = chapter?.topics[newTopicIndex];
    setTopic(topic);
  }, [tutorials, location.pathname]);
  return (
    <Stack
      sx={{
        px: 10,
        py: 2,
        flexGrow: 1,
        minHeight: window.innerHeight - 66,
        justifyContent: "space-between",
      }}
      height={"100%"}
    >
      <Box>
        <Typography variant="h4" gutterBottom>
          {topic?.name}
        </Typography>
        {topic?.content?.map((item, index) => (
          <RendererComponent element={item} />
        ))}
      </Box>
      <Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}>
        <Button
          onClick={topicIndex === 0 ? jumpToChapterPage : jumpToPreviousTopic}
          variant="outlined"
        >
          {topicIndex === 0 ? "Back to Chapter" : "Previous"}
        </Button>

        <Button
          disabled={
            tutorial?.chapters?.length - 1 === chapterIndex &&
            chapter?.topics?.length - 1 === topicIndex
          }
          variant="outlined"
          onClick={
            chapter?.topics?.length - 1 === topicIndex
              ? jumpToNextChapter
              : jumpToNextTopic
          }
        >
          {chapter?.topics?.length - 1 === topicIndex ? "Next Chapter" : "Next"}
        </Button>
      </Stack>
    </Stack>
  );
}

function RendererComponent({ element }) {
  if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(element?.type)) {
    return (
      <Typography variant={element.type} gutterBottom>
        {element.data}{" "}
      </Typography>
    );
  }
  if (element.type === "paragraph") {
    return (
      <Typography component="p" gutterBottom>
        {element.data}
      </Typography>
    );
  }
  if (element.type === "bullet") {
    return (
      <ul>
        {element.data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  if (element.type === "titled_bullet") {
    return (
      <ul>
        {element.data.map((item, index) => (
          <li key={index}>
            <strong>{item.title}:</strong>&nbsp;
            {item.body}
          </li>
        ))}
      </ul>
    );
  }
}
