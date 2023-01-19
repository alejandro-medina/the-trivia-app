import Button from "./Button/Button"

export default function Cover({ startQuizz, loading }) {
  return (
    <div className="cover">
      <div className="app">
        <h1 className="cover__title">The Trivia App</h1>
        <p className="cover__description">
          Play unlimited times, enjoy!
        </p>
        <Button text="Play!" onClick={startQuizz} disabled={loading} />
      </div>
    </div>
  )
}