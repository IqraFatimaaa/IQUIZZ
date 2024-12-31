import React, { useState } from "react";
import QuestionList from "./QuestionList";
import "./Quiz.css";

function Quiz() {
  const Questions = [
    {
      question: "What is ReactJs ?",
      options: ["css Framework", "react library", "react Framework"],
      answer: "react library",
    },

    {
      question: "What is JSX?",
      options: [
        "A JavaScript syntax extension",
        "A CSS framework",
        "A programming language",
        "A database query language",
      ],
      answer: "A JavaScript syntax extension",
    },
    {
      question:
        "Which method is used to update state in a functional component?",
      options: ["setState", "useState", "updateState", "changeState"],
      answer: "useState",
    },
    {
      question: "What is the virtual DOM in React?",
      options: [
        "A copy of the real DOM for performance optimization",
        "A DOM element",
        "A database schema",
        "A CSS property",
      ],
      answer: "A copy of the real DOM for performance optimization",
    },
    {
      question: "Which hook is used to manage side effects in React?",
      options: ["useState", "useEffect", "useReducer", "useContext"],
      answer: "useEffect",
    },
    {
      question: "What is the purpose of the key prop in React?",
      options: [
        "To uniquely identify elements in a list",
        "To provide default values",
        "To change styles",
        "To bind event handlers",
      ],
      answer: "To uniquely identify elements in a list",
    },
    {
      question: "What does React.StrictMode do?",
      options: [
        "Checks for potential problems in an application",
        "Improves performance",
        "Handles state",
        "Manages context",
      ],
      answer: "Checks for potential problems in an application",
    },
    {
      question: "What is the default port number for running a React app?",
      options: [3000, 4000, 8080, 5000],
      answer: 3000,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleClick = (option) => {
    setCurrentAnswer(option);
    if (option === Questions[currentIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setCurrentAnswer(null); // Reset currentAnswer for the next question
  };

  return (
    <div>
      {currentIndex < Questions.length ? (
        <>
          <QuestionList
            question={Questions[currentIndex].question}
            options={Questions[currentIndex].options}
            handleClick={handleClick}
            currentAnswer={currentAnswer}
          />
          <button
            disabled={currentAnswer === null}
            className={currentAnswer === null ? "button-disable" : "button"}
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        </>
      ) : (
        <h2>
          Your final score is: {score}/{Questions.length}
        </h2>
      )}
    </div>
  );
}

export default Quiz;
