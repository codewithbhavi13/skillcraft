import React, { useContext, useState } from "react";
import { OpenedTutorialContext } from "../context/OpenedTutorialContext";
import {
  Button,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { option, path } from "framer-motion/client";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const optionsLabel = ["a", "b", "c", "d"];

export default function QuizPage() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { tutorial } = useContext(OpenedTutorialContext);
  const { saveQuizResult } = useContext(UserContext);

  const quiz = tutorial?.quiz;

  const emptyAnswerArray = Array(quiz?.length).fill("");
  const [answers, setAnswers] = useState(emptyAnswerArray);
  const [result, setResult] = useState(-1);
  const handleAnswerChange = (answer, questionnumber) => {
    let newAnswers = [...answers];
    newAnswers[questionnumber] = answer;
    setAnswers(newAnswers);
  };
  const generateResult = () => {
    let noOfCorrectAnswers = 0;
    answers.forEach((value, index) => {
      if (value === quiz[index].answer) {
        noOfCorrectAnswers++;
      }
    });
    const currentResult = (noOfCorrectAnswers / quiz.length) * 100;
    saveQuizResult(tutorial.title, currentResult);
    setResult(currentResult);
  };

  const handleBacktoTutorial = () => {
    const tutorialUrl = pathname.replace(/\/[^/]+$/, "/");
    navigate(tutorialUrl);
  };
  if (!quiz) {
    return <div>There is no Quiz for this tutorial</div>;
  }

  return (
    <Container sx={{ my: 5 }}>
      <div>
        <Container>
          <Typography variant="h5">{tutorial?.title}</Typography>
        </Container>
        {quiz.map((item, questionIndex) => (
          <Container
            sx={{
              my: 3,
              p: 0,
            }}
            key={questionIndex}
          >
            <Typography variant="h6">{`${questionIndex + 1}. ${
              item.question
            }`}</Typography>
            <RadioGroup
              value={answers[questionIndex]}
              onChange={(e) =>
                result === -1
                  ? handleAnswerChange(e.target.value, questionIndex)
                  : null
              }
            >
              {item.options?.map((option, optionIndex) => (
                <FormControlLabel
                  value={option}
                  key={optionIndex}
                  control={<Radio />}
                  sx={
                    result !== -1 && {
                      backgroundColor:
                        item.answer === option
                          ? "greenyellow"
                          : answers[questionIndex] === option
                          ? "red"
                          : null,
                    }
                  }
                  label={`${optionsLabel[optionIndex]}) ${option}`}
                />
              ))}
            </RadioGroup>
          </Container>
        ))}
      </div>
      {result !== -1 && (
        <Typography textAlign={"center"} variant="h5">
          Result: {result}%
        </Typography>
      )}
      <Container sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          onClick={result === -1 ? generateResult : handleBacktoTutorial}
          disabled={answers.find((item) => item === "") === ""}
        >
          {result === -1 ? "Submit" : "Back to tutorial"}
        </Button>
      </Container>
    </Container>
  );
}
