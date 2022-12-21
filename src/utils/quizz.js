
const API_URL = "https://the-trivia-api.com/api/questions";
const region = "SL";

const getTrivia = ({ limit = 10, difficulty = "hard" }) => {

  const url = `${API_URL}?limit=${limit}&region=${region}&difficulty=${difficulty}`;

  return fetch(url)
    .then(data => data.json())
    .then(data => data);
}

const generateTrivia = async () => {
  return await getTrivia({});
}

export {
  generateTrivia
}
