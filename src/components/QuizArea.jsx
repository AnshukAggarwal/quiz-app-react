import React, { useState } from "react";
import Questions from "./Questions";
import Result from "./Result";
import data from "../data";

const QuizArea = () => {
  const questions = data;
  const [showResult, setShowResult] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correct, setCorrect] = useState(0);

  const handleQuestionChange = (iscorrect) => {
    if (iscorrect) {
      setCorrect(correct + 1);
    }
    const nextQuestion = currentQuestion + 1;
    nextQuestion < questions.length
      ? setCurrentQuestion(nextQuestion)
      : setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setCorrect(0);
    setShowResult(false);
  };
  return (
    <React.Fragment>
      {!showResult && (
        <Questions
          data={questions}
          currentQuestion={currentQuestion}
          questionChange={handleQuestionChange}
        />
      )}
      {showResult && <Result score={correct} resetQuiz={resetQuiz} />}
    </React.Fragment>
  );
};

export default QuizArea;
