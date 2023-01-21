import "./ResultsPage.css";
import Button from "../Button/Button";

export default function ResultPage({ results, onRestart }) {

  const titleList = [
    'Do it better :(', // < 5
    'Great!', // 5
    'Well done!', // 6 - 7
    'Very good!', // 8 - 9
    'Excellent!',// 10
  ];

  const getMessageTitle = () => {
    let title = "";
    switch (true) {
      case (results.totalCorrect < 5):
        title = titleList[0]
        break;
      case (results.totalCorrect === 5):
        title = titleList[1]
        break;
      case (results.totalCorrect > 5 && results.totalCorrect <= 7):
        title = titleList[2]
        break;
      case (results.totalCorrect > 7 && results.totalCorrect <= 9):
        title = titleList[3]
        break;
      case (results.totalCorrect === 10):
        title = titleList[4]
        break;
      default:
        break;
    }
    return title;
  }

  return (
    <div className="results" style={{ textAlign: 'center', margin: '0 auto' }}>
      <p className="results__title">{getMessageTitle()}</p>
      <p className="results__text">You've finished The Trivia</p>
      <p className="results__results">{results.totalCorrect} / {results.totalQuestions}</p>
      <Button onClick={onRestart} text="=> Lobby <=" />
    </div>
  )
}