import React from "react";
import styles from "./Questions.module.css";

const Questions = ({ data, currentQuestion, questionChange }) => {
  return (
    <section className={styles.questions}>
      <section className={styles.question}>
        <h3>{data[currentQuestion].questionText}</h3>
        <span>
          {currentQuestion + 1}/{data.length}
        </span>
      </section>
      <section className={styles.options}>
        {data[currentQuestion].answerOptions.map((answer, i) => (
          <button key={i} onClick={() => questionChange(answer.isCorrect)}>
            {answer.answerText}
          </button>
        ))}
      </section>
    </section>
  );
};

export default Questions;
