import { useState } from "react";

// Utils and data
import { generateTrivia } from "./utils/quizz";

// Components
import Cover from "./components/TriviaCover";
import Trivia from "./components/Trivia/Trivia";

function App() {

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inProgress, setInProgress] = useState(false); // Trivia in progress
  const [results, setResults] = useState(null); // Trivia results

  /**
   * Trivia status for rendering 
   * 0 = Not started yet (new)
   * 1 = In Progress
   * 2 = Finished
   */
  const [triviaStatus, setTriviaStatus] = useState(0);

  const startQuizz = async () => {
    setLoading(true);
    try {
      const trivia = await generateTrivia();
      setQuestions(trivia);
      setInProgress(true);
      setTriviaStatus(1);
    } catch (error) {
      // show message to user
    } finally {
      setLoading(false);
    }
  }

  const restart = () => {
    setQuestions([]);
    setInProgress(false);
    setTriviaStatus(0);
    setResults(null);
  }

  return (
    <div className="app">
      <div className="trivia-container">

        {((!inProgress || !questions.length) && triviaStatus === 0) && <Cover startQuizz={startQuizz} loading={loading} />}

        {((questions.length > 0 && inProgress) && triviaStatus === 1) 
          && <Trivia questions={questions} onTriviaEnds={(results) => {
            setInProgress(false);
            setResults(results);
            setTriviaStatus(2);
          }}/>
        }

        {(!inProgress && results && triviaStatus === 2)
        && <div style={{textAlign: 'center', margin: '0 auto'}}>
            <p>¡Haz acabado con la trivia!</p>
            <p>Total de preguntas: {results.totalQuestions}</p>
            <p>Total correctas: {results.totalCorrect}</p>

            <button onClick={restart}>
              Inicio
            </button>

        </div>}

      </div>
    </div>
  );
}

export default App;