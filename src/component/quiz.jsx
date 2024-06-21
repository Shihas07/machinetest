import React, { useState } from "react";

export default function Quiz() {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Mars", "Venus"],
      answer: "Jupiter",
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Monaco", "Vatican City", "Maldives", "Nauru"],
      answer: "Vatican City",
    },
  ];
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const currentQuestion = questions[questionIndex];
  const [mark, setMark] = useState(0);
  const [istrue, setIstrue] = useState(false);

  const check = (option) => {
    setIstrue(true);
    setSelectedOption(option);
    if (currentQuestion.answer === option) {
      setMark(mark + 1);
    }
  };
  console.log(mark);
  const nextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setSelectedOption(null);
    setIstrue(false);
  };
  return (
    <div>
      <p>{currentQuestion.question}</p>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                onChange={() => check(option)}
                type="radio"
                name="some"
                checked={selectedOption === option}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <ul>{istrue && <p>{currentQuestion.answer}</p>}</ul>

      <ul>
        {questionIndex < questions.length - 1 ? (
          <button onClick={nextQuestion}>Next</button>
        ) : (
          <p>{mark}</p>
        )}
      </ul>
    </div>
  );
}
