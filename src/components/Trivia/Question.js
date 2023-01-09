import Answer from "./Answer";
import styles from "./Question.module.css";

export default function Question({ question, onSelectAnswer }) {
  return (
    <div>
      <p className={styles.title}>
        {question.question}
      </p>
      <div>
        {question.answers.map((answer, idx) => {
          return <Answer key={`q-${question.id}-a-${idx}`} answerText={answer.answer} selected={answer.selected} onSelectAnswer={() => {onSelectAnswer(idx)}} />
        })}
      </div>
    </div>
  )
}