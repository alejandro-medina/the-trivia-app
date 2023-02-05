import { useEffect } from "react";
import Answer from "./Answer";
import styles from "./Question.module.css";

export default function Question({ question, onSelectAnswer }) {
  const { title, answers__container } = styles;
  const totalAnswers = question.answers?.length;

  const existOption = (number) => {
    return number <= totalAnswers;
  }

  const KeyDownHandler = (e) => {
    const optionPressed = parseInt(e.key);
    if (!isNaN(optionPressed)) {
      if (existOption(optionPressed)) {
        e.preventDefault();
        const optionPressedIndex = optionPressed - 1;
        onSelectAnswer(optionPressedIndex);
      }
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", KeyDownHandler);
    return () => {
      document.removeEventListener("keydown", KeyDownHandler);
    }
  }, [question])

  return (
    <div>
      <p className={title}>
        {question.question}
      </p>
      <div className={answers__container}>
        {question.answers.map((answer, idx) => {
          return <Answer key={`q-${question.id}-a-${idx}`}
            answerText={answer.answer}
            selected={answer.selected}
            onSelectAnswer={() => { onSelectAnswer(idx) }} />
        })}
      </div>
    </div>
  )
}