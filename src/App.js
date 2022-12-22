import { useState } from "react";

import "./App.css";

// Utils and data
import { generateTrivia } from "./utils/quizz";

// Components
import Cover from "./components/TriviaCover";

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

      {(questions.length > 0 && inProgress) && <>
        {questions.map((q, idx) => {
          return <div key={idx} style={{ marginBottom: "2rem" }}>
            <b>Question #{idx + 1} / {questions.length}</b>
            <p>{q.question}</p>
            <div>

              {q.incorrectAnswers.map(ans => {
                return (
                  <div key={ans}>
                    <input id={ans} type="radio" name="answer" value={ans} />
                    <label htmlFor={ans}>{ans}</label>
                  </div>
                )
              })}
              <div>
                <input id={q.correctAnswer} type="radio" name="answer" value={q.correctAnswer} />
                <label htmlFor={q.correctAnswer}>{q.correctAnswer}</label>
              </div>
            </div>
          </div>
        })}
      </>}
    </div>
  );
}

export default App;