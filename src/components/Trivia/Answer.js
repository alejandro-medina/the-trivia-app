import styles from "./Answer.module.css";

export default function Answer({ answerText, selected, onSelectAnswer }) {

  const { answer, active } = styles;

  return (
    <div onClick={onSelectAnswer} className={`${answer} ${selected ? active : ''}`}>
      {answerText}
    </div>
  )
}
