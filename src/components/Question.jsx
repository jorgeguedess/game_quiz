import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Option from "./Option";

import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  return (
    <div id="question">
      <p className="title">
        Rodada <strong>{quizState.currentQuestion + 1}</strong> de{" "}
        {quizState.questions.length}
      </p>
      <p className="subtitle">Qual a mentira?</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
          />
        ))}
      </div>
      {quizState.answerSelected && (
        <div>
          <p className="description">
            <strong>Explicação: </strong>
            {currentQuestion.comment}
          </p>
          <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
            Continuar
          </button>
        </div>
      )}
    </div>
  );
};

export default Question;
