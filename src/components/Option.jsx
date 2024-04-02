import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Option.css";

const Option = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <button
      className={`option ${
        quizState.answerSelected && option === answer ? "correct" : ""
      } ${quizState.answerSelected && option !== answer ? "wrong" : ""}`}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </button>
  );
};

export default Option;
