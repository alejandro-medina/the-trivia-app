import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  const getTriviaQuestions = () => {
    return fetch("https://the-trivia-api.com/api/questions?limit=10&region=SL&difficulty=hard")
      .then(data => data.json())
      .then(data => data);
  }

  const startQuizz = async () => {
    setLoading(true);
    getTriviaQuestions().then(questions => {
      setQuestions(questions);
      setInProgress(true);
    }).finally(() => {
      setLoading(false);
    })

  }

  return (
    <div className="app">
      {(!inProgress || !questions.length) && <div style={loading ? { opacity: .5 } : null}>
        <h1 style={{ margin: 0 }}>Bienvenido al quizz</h1>
        <p>Pon a prueba tus conocimientos y supera cada vez más tu propio record!</p>
        <br />
        <Button text="Comenzar quizz" onClick={() => { startQuizz() }} />
        <p>
          <small>
            * Por el momento, el quizz solo se encuentra disponible en <b>inglés</b>
          </small>
        </p>
      </div>}

      {(questions.length > 0 && inProgress) && <>
        {questions.map((q, idx) => {
          return <div style={{ marginBottom: "2rem" }}>
            <b>Question #{idx + 1} / {questions.length}</b>
            <p>{q.question}</p>
            <div>

              {q.incorrectAnswers.map(ans => {
                return (
                  <div>
                    <input id={ans} type="radio" name="answer" value={ans} />
                    <label for={ans}>{ans}</label>
                  </div>
                )
              })}
              <div>
                <input id={q.correctAnswer} type="radio" name="answer" value={q.correctAnswer} />
                <label for={q.correctAnswer}>{q.correctAnswer}</label>
              </div>
            </div>
          </div>
        })}
      </>}
    </div>
  );
}

export default App;