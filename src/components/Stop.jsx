import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Stop.css";

const Stop = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  const handleClickStop = () => {
    dispatch({ type: "STOP_GAME" });
  };

  return (
    <div className="stop">
      <button className="btn-stop" onClick={handleClickStop}>
        Parar Jogo
      </button>
    </div>
  );
};

export default Stop;
