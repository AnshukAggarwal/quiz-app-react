import React from "react";

const Result = ({ score, resetQuiz }) => {
  return (
    <>
      <h1>You have {score} correct answers</h1>
      <button onClick={resetQuiz}>Restart Quiz</button>
    </>
  );
};

export default Result;
