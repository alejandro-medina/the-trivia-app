import styles from "./Answer.module.css";

export default function Answer({ answerText, selected, onSelectAnswer, optionNumber }) {

  const { answer, active, number } = styles;

  return (
    <div onClick={onSelectAnswer} className={`${answer} ${selected ? active : ''}`}>
      <span className={number} title={`Press ${optionNumber} to select this answer`}>
        {optionNumber}
      </span>
      {answerText}
    </div>
  )
}
