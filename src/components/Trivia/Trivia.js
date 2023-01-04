import { useRef, useState } from "react";
import Badge from "../Badge";
import Question from "./Question";

export default function Trivia({ questions, onTriviaEnds }) {

  let [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const correctAnswers = useRef(0);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];
  const isLastQuestion = (currentIndex + 1) === totalQuestions;

  const onSelectAnswer = ({ target: { value: answerIndex } }) => {
    setAnswer(currentQuestion.answers[answerIndex]);
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
    <div>
      <p>Total questions: {totalQuestions}</p>
      <p># {currentIndex + 1}</p>
      <p style={{ margin: 0 }}>Type: {currentQuestion.type}</p>
      <Badge className={currentQuestion.difficulty}>
        {currentQuestion.difficulty}
      </Badge>
      <p style={{ margin: 0 }}>Category: {currentQuestion.category}</p>
      <Question question={currentQuestion} onSelectAnswer={onSelectAnswer} />
      <br />
      <button disabled={!answer} onClick={nextQuestion}>
        {isLastQuestion ? 'Finalizar' : 'Siguiente'}
      </button>
    </div>
  )
}