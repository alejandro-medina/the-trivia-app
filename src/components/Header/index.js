import "./Header.css";

export default function Header({ showTitle = false }) {
  return (
    <header>
      <div className="app">
        <div className="header__logo">
          <img width="16" height="16" src="/favicon.ico" alt="Trivia icon" title="The Trivia App" />
          {showTitle && <p>The Trivia App</p>}
        </div>
      </div>
    </header>
  )
}