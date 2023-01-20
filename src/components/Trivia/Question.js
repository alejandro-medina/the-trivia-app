import Answer from "./Answer";
import styles from "./Question.module.css";

export default function Question({ question, onSelectAnswer }) {
  const { title, answers__container } = styles;
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