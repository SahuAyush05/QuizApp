import React, { useState } from "react";
import Question from "../question.js";
const Quiz = () => {
  const [userAnswer, setUserAnswer] = useState([]);
  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswer((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  };
  const activeQuestionIndex = userAnswer.length;
  return (
    <div id="quiz">
        <div id="question">
      <h2>{Question[activeQuestionIndex].text}</h2>
      <ul id="answers">
        {Question[activeQuestionIndex].answers.map((answer) => (
          <li key={answer} className="answer">
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
    
  );
};

export default Quiz;
