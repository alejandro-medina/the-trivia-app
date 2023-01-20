import { useRef, useState } from "react";
import Badge from "../Badge";
import Header from "../Header";
import ProgressBar from "../ProgressBar";
import Question from "./Question";
import "./Trivia.css";

export default function Trivia({ questions, onTriviaEnds }) {

  let [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const correctAnswers = useRef(0);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];
  const currentQuestionNumber = currentIndex + 1;
  const isLastQuestion = (currentIndex + 1) === totalQuestions;

  const markAnswerAsActive = (answerIndex) => {
    currentQuestion.answers.forEach((answer, idx) => {
      if (answerIndex === idx) {
        answer.selected = true;
      } else {
        answer.selected = false;
      }
    });
  }

  const onSelectAnswer = (answerIndex) => {
    setAnswer(currentQuestion.answers[answerIndex]);
    markAnswerAsActive(answerIndex);
  }

  const nextQuestion = () => {

    if (!answer) return;

    if (answer.correct) {
      correctAnswers.current = correctAnswers.current + 1;
    }

    setAnswer(null);

    if (questions[currentIndex + 1]) {
      setCurrentIndex(current => current + 1);
    } else {
      onTriviaEnds({
        totalQuestions,
        totalCorrect: correctAnswers.current
      });
    }
  }

  return (
    <>
      <Header />
      <div className="app">
        <div className="trivia-container">
          <div className="trivia">
            <div className="trivia__header">
                <p>{currentQuestionNumber} / {totalQuestions}</p>
                <ProgressBar value={currentQuestionNumber} max={totalQuestions} />
            </div>

            <div className="trivia__metadata">
              {currentQuestion.difficulty &&
                <Badge className={currentQuestion.difficulty}>
                  {currentQuestion.difficulty}
                </Badge>
              }
              <Badge>{currentQuestion.type}</Badge>
              <Badge>{currentQuestion.category}</Badge>
            </div>

            {/* The question and answers */}
            <Question question={currentQuestion} onSelectAnswer={onSelectAnswer} />

            <div className="trivia__footer">
              <button className="trivia__btn btn" disabled={!answer} onClick={nextQuestion}>
                {isLastQuestion ? 'Finalizar' : 'Siguiente'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}