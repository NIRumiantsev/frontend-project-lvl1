import engineRun from '../index.js';
import generateRandomNumber from '../utils.js';

const checkEven = (number) => {return number % 2 === 0};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {

  const question = generateRandomNumber(100, 0);

  const correctAnswer = checkEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => engineRun(gameDescription, getQuestionAndAnswer);
