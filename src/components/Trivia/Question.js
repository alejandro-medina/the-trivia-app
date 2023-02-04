import { useEffect } from "react";
import Answer from "./Answer";
import styles from "./Question.module.css";

export default function Question({ question, onSelectAnswer }) {
  const { title, answers__container } = styles;

  const KeyDownHandler = (e) => {
    const availableOptions = ["1", "2", "3", "4"];
    if (availableOptions.includes(e.key)) {
      e.preventDefault();
      const idx = e.key - 1;
      onSelectAnswer(idx);
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