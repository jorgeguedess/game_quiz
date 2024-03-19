import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      {/* <picture>
        <img src={Logo} alt="Generation Brasil" />
      </picture> */}
      <h2>Seja bem-vinde</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
    </div>
  );
};

export default Welcome;
