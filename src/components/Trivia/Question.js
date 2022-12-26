import Answer from "./Answer";
import styles from "./Question.module.css";

export default function Question({ question, onSelectAnswer }) {
  return (
    <div>
      <p className={styles.title}>
        {question.question}
      </p>
      {question.answers.map((answer, idx) => {
        return <Answer key={idx} answerText={answer.answer} index={idx} onSelectAnswer={onSelectAnswer} />
      })}
    </div>
  )
}