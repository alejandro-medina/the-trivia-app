import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="app">
      <div>
        <h1 style={{ margin: 0 }}>Bienvedivo al quizz</h1>
        <p>Ponte a prueba con retadoras preguntas y rompe tu propio record!</p>
        <br />
        <Button text="Comenzar quizz" onClick={() => { }} />
      </div>
    </div>
  );
}

export default App;