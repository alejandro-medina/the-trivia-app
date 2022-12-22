import { useRef, useState } from "react";

export default function Trivia({ questions }) {

  const totalQuestions = questions.length;
  let [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = questions[currentIndex];

  return (
    <div>
      <p>Total questions: {totalQuestions}</p>
      <p># {currentIndex + 1}</p>
      <p style={{ margin: 0 }}>Type: {currentQuestion.type}</p>
      <p style={{ margin: 0 }}>Difficulty: {currentQuestion.difficulty}</p>
      <p style={{ margin: 0 }}>Category: {currentQuestion.category}</p>
      <div>
        <p style={{ fontSize: "1.5rem" }}>
          {currentQuestion.question}
        </p>

        {currentQuestion.answers.map((answer, idx) => {
          return <div key={`${currentQuestion.id}-ans-${idx}`}>
            <input type="radio" name="answer" id={answer.answer} value={answer.answer} />
            <label htmlFor={answer.answer}> {answer.answer} </label>
          </div>
        })}
        <br />
        <button style={{marginRight: '10px'}} onClick={() => {
          setCurrentIndex(current => current - 1)
        }}>Anterior</button>
        <button onClick={() => {
          setCurrentIndex(current => current + 1)
        }}>siguiente</button>
      </div>

    </div>
  )

}