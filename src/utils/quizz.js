
const API_URL = "https://the-trivia-api.com/api/questions";
const region = "SL";

const getTrivia = ({ limit = 10, difficulty = "hard" }) => {

  const url = `${API_URL}?limit=${limit}&region=${region}&difficulty=${difficulty}`;

  return fetch(url)
    .then(data => data.json())
    .then(data => data);
}

/**
 * Gets the trivia array from the API and parses to 
 * get the desired format
 * 
 * Then order the answers alphabetical
 * 
 * @param {array} trivia Raw trivia array from API
 */
const transformTrivia = (trivia) => {
  return trivia.map(q => {
    return {
      question: q.question,
      answers: [...q.incorrectAnswers.map(a => {
        return {
          answer: a,
          correct: false
        }
      }), {
        answer: q.correctAnswer,
        correct: true
      }].sort((a, b) => {
        if (a.answer < b.answer) return -1;
        if (a.answer > b.answer) return 1;
        return 0;
      }),
      id: q.id,
      category: q.category,
      type: q.type,
      difficulty: q.difficulty
    }
  })
}

const generateTrivia = async () => {
  return transformTrivia(await getTrivia({}));
}

export {
  generateTrivia
}
