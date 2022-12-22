import { useState } from "react";

import "./App.css";

// Utils and data
import { generateTrivia } from "./utils/quizz";

// Components
import Cover from "./components/TriviaCover";
import Trivia from "./components/Trivia/Trivia";

function App() {

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inProgress, setInProgress] = useState(false); // Trivia in progress

  const startQuizz = async () => {
    console.log("start")
    setLoading(true);
    try {
      const trivia = await generateTrivia();
      setQuestions(trivia);
      setInProgress(true);
    } catch (error) {
      // show message to user
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">

      {(!inProgress || !questions.length) && <Cover startQuizz={startQuizz} loading={loading} />}

      {(questions.length > 0 && inProgress) && <Trivia questions={questions} />}

    </div>
  );
}

export default App;