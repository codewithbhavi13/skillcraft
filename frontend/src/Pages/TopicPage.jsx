import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import { UserContext } from "../context/UserContext";
import { OpenedTutorialContext } from "../context/OpenedTutorialContext";
import RendererComponent from "../Component/RendererComponent";

export default function TopicPage() {
  const location = useLocation();

  const { startChapter, completeTopic } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    chapter,
    tutorial,
    topic,
    topicIndex,
    chapterIndex,
    enrolledTutorial,
    isTopicCompleted,
    clearData,
  } = useContext(OpenedTutorialContext);
  console.log("Chapter: ", chapter);
  console.log("Topic", topic);

  const jumpToChapterPage = () => {
    navigate(location.pathname.replace(/\/topic-\d+$/, ""));
  };
  const jumpToNextChapter = () => {
    clearData();
    navigate(
      location.pathname.replace(/\/topic-\d+$/, "").slice(0, -1) +
        (chapterIndex + 2)
    );
    const nextChapter = tutorial?.chapters[chapterIndex + 1];
    const isNextChapterStarted = enrolledTutorial?.startedChapters?.find(
      (item) => item.name === nextChapter.name
    );

    if (!isNextChapterStarted) {
      startChapter({
        tutorialName: tutorial.title,
        chapterName: nextChapter.name,
      });
    }
  };
  const jumpToPreviousTopic = () => {
    navigate(location.pathname.slice(0, -1) + topicIndex);
  };
  const jumpToNextTopic = () => {
    navigate(location.pathname.slice(0, -1) + (topicIndex + 2));
  };
  const startQuiz = () => {
    const quizUrl =
      location.pathname.replace(/\/chapter-\d+\/topic-\d+/, "") + "/quiz";
    navigate(quizUrl);
  };

  useEffect(() => {
    const setCompleteTopic = () => {
      if (tutorial.title && chapter.name && topic?.name) {
        if (!isTopicCompleted(chapter.name, topic.name)) {
          completeTopic({
            tutorialName: tutorial.title,
            chapterName: chapter.name,
            topicName: topic.name,
          });
        }
      }
    };
    setCompleteTopic();
  }, [topic]);
  return (
    <Stack
      sx={{
        px: 5,
        py: 2,
        flexGrow: 1,
        minHeight: window.innerHeight - 66,
        justifyContent: "space-between",
      }}
      height={"100%"}
    >
      <Box>
        <Typography variant="h5" gutterBottom>
          {topic?.name}
        </Typography>
        {topic?.content?.map((item, index) => (
          <RendererComponent key={index} element={item} />
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
          variant="outlined"
          onClick={
            tutorial?.chapters?.length - 1 === chapterIndex &&
            chapter?.topics?.length - 1 === topicIndex
              ? startQuiz
              : chapter?.topics?.length - 1 === topicIndex
              ? jumpToNextChapter
              : jumpToNextTopic
          }
        >
          {tutorial?.chapters?.length - 1 === chapterIndex &&
          chapter?.topics?.length - 1 === topicIndex
            ? "Start Quiz"
            : chapter?.topics?.length - 1 === topicIndex
            ? "Next Chapter"
            : "Next"}
        </Button>
      </Stack>
    </Stack>
  );
}
