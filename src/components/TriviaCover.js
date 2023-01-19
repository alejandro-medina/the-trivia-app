import Button from "./Button/Button"

export default function Cover({ startQuizz, loading }) {
  return (
    <div className="app">
      <h1>Bienvenido al quizz</h1>
      <p>¡Pon a prueba tus conocimientos y supera cada vez más tu propio record!</p>
      <br />
      <Button text="Comenzar quizz" onClick={startQuizz} disabled={loading} />
      <p>
        <small>
          * Por el momento, el quizz solo se encuentra disponible en <b>inglés</b>
        </small>
      </p>
    </div>
  )
}