import { createContext, useContext, useEffect, useState } from "react";

import { CourseContext } from "./CourseContext";

import { UserContext } from "./UserContext";
import { MessageContext } from "./MessageContext";
import { useParams } from "react-router-dom";

export const OpenedTutorialContext = createContext();

export const OpenedTutorialProvider = ({ children }) => {
  const { setErrorMsg } = useContext(MessageContext);
  const { tutorials } = useContext(CourseContext);
  const { isLogin, enrolledTutorials, getEnrolledTutorial } =
    useContext(UserContext);

  const [tutorial, setTutorial] = useState({});
  const [chapter, setChapter] = useState({});
  const [topic, setTopic] = useState({});
  const [openChapters, setOpenChapters] = useState({});

  const [isEnrolled, setIsEnrolled] = useState(false);
  const [enrolledTutorial, setEnrolledTutorial] = useState({});
  const [enrollLoading, setEnrollLoading] = useState(false);

  const [chapterIndex, setChapterIndex] = useState(-1);
  const [topicIndex, setTopicIndex] = useState(-1);

  const parms = useParams();
  const {
    tutorial: tutorialParam,
    chapter: chapterParam,
    topic: topicParam,
  } = useParams();

  useEffect(() => {
    if (tutorialParam) setOpenedTutorial();
  }, [tutorialParam, chapterParam, tutorials]);
  useEffect(() => {
    if (chapterParam && Object.keys(tutorial || {}).length !== 0)
      setChapterIndexandChapter();
  }, [chapterParam, tutorial]);

  useEffect(() => {
    if (topicParam && Object.keys(chapter || {}).length !== 0) {
      setTopicIndexandTopic();
    }
  }, [topicParam, chapter]);

  useEffect(() => {
    if (Object.keys(tutorial || {}).length !== 0 && enrolledTutorials)
      checkForEnrolledTutorial();
  }, [tutorial, enrolledTutorials]);

  const handleToggle = (index) => {
    setOpenChapters((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleGetEnrolled = async () => {
    if (!isLogin) return setErrorMsg("Please Login First");
    setEnrollLoading(true);
    const response = await getEnrolledTutorial({
      title: tutorial.title,
      noOfChapters: tutorial.chapters.length,
    });
    if (response) {
      setIsEnrolled(true);
      setEnrolledTutorial(response);
    }
    setEnrollLoading(false);
  };

  const setOpenedTutorial = () => {
    setTutorial(
      tutorials.find(
        (item) =>
          item.title.toLowerCase().replaceAll("-", " ") ===
          parms.tutorial.replaceAll("-", " ")
      )
    );
  };

  const setChapterIndexandChapter = () => {
    const newChapterIndex = parseInt(parms.chapter.at(-1)) - 1;

    if (isNaN(newChapterIndex)) {
      console.error("error");
      return;
    }

    setChapterIndex(newChapterIndex);

    const chapter = tutorial.chapters[newChapterIndex];
    setChapter(chapter);
  };

  const checkForEnrolledTutorial = () => {
    if (isLogin) {
      const enrollTutorial = enrolledTutorials.find(
        (item) => item.title === tutorial?.title
      );

      if (enrollTutorial !== undefined) {
        setIsEnrolled(true);
        setEnrolledTutorial(enrollTutorial);
      }
    }
  };

  const isChapterUnlocked = (chapterName) => {
    if (!isLogin || !isEnrolled) return false;
    const startedChapter = enrolledTutorial.startedChapters.find(
      (item) => item.name === chapterName
    );

    return startedChapter !== undefined;
  };
  const isChapterCompleted = (name) => {
    if (isEnrolled) {
      const chapter = enrolledTutorial.startedChapters.find(
        (c) => c.name === name
      );
      return chapter?.isCompleted;
    }
    return false;
  };

  const setTopicIndexandTopic = () => {
    const newTopicIndex = parseInt(parms.topic.at(-1)) - 1;
    if (isNaN(newTopicIndex)) {
      return;
    }
    setTopicIndex(newTopicIndex);
    const topic = chapter.topics[newTopicIndex];
    setTopic(topic);
  };

  const isTopicCompleted = (chapterName, topicName) => {
    if (!isLogin || !isEnrolled) return false;

    const startedChapter = enrolledTutorial.startedChapters.find(
      (item) => item.name === chapterName
    );

    if (startedChapter === undefined) return false;
    const completedTopic = startedChapter.topics.find(
      (topic) => topic === topicName
    );
    return completedTopic !== undefined;
  };
  return (
    <OpenedTutorialContext.Provider
      value={{
        chapter,
        chapterIndex,
        enrollLoading,
        enrolledTutorial,
        handleGetEnrolled,
        handleToggle,
        isChapterCompleted,
        isChapterUnlocked,
        isEnrolled,
        isTopicCompleted,
        openChapters,
        setChapterIndexandChapter,
        setOpenedTutorial,
        topic,
        topicIndex,
        tutorial,
      }}
    >
      {children}
    </OpenedTutorialContext.Provider>
  );
};
