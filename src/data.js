const data = [
  {
    questionText: "Everything in React is a?",
    answerOptions: [
      { answerText: "Module", isCorrect: false },
      { answerText: "Component", isCorrect: true },
      { answerText: "Package", isCorrect: false },
      { answerText: "Class", isCorrect: false },
    ],
  },
  {
    questionText: "How many elements does a react component return?",
    answerOptions: [
      { answerText: "2", isCorrect: false },
      { answerText: "1", isCorrect: true },
      { answerText: "As many as you want", isCorrect: false },
      { answerText: "None of the above", isCorrect: false },
    ],
  },
  {
    questionText:
      "How can you access the state of a component from inside of a member function?",
    answerOptions: [
      { answerText: "this.state", isCorrect: true },
      { answerText: "this.getState()", isCorrect: false },
      { answerText: "this.values", isCorrect: false },
      { answerText: "this.prototype.stateValue", isCorrect: false },
    ],
  },
  {
    questionText:
      "What port is the default where the webpack-dev-server will run?",
    answerOptions: [
      { answerText: "7000", isCorrect: false },
      { answerText: "3306", isCorrect: false },
      { answerText: "8000", isCorrect: false },
      { answerText: "3000", isCorrect: true },
    ],
  },
  {
    questionText:
      "In React what is used to pass data to a component from outside?",
    answerOptions: [
      { answerText: "setState", isCorrect: false },
      { answerText: "propTyes", isCorrect: false },
      { answerText: "props", isCorrect: true },
      { answerText: "render with Arguments", isCorrect: false },
    ],
  },
  {
    questionText:
      "If you want to import just the Component from the React library, what syntax do you use?",
    answerOptions: [
      { answerText: "import React.Component from 'react'", isCorrect: false },
      { answerText: "import [ Component ] from 'react'", isCorrect: false },
      { answerText: "import Component from 'react'", isCorrect: false },
      { answerText: "import { Component } from 'react'", isCorrect: true },
    ],
  },
];

export default data;
