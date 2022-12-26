export default function Answer({ answerText, index, onSelectAnswer }) {
  return (
    <div>
      <input
        type="radio"
        name="answer"
        id={answerText}
        value={index}
        onChange={onSelectAnswer}
      />
      <label htmlFor={answerText}> {answerText} </label>
    </div>
  )
}
