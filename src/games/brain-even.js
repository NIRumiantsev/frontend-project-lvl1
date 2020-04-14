import engineRun from '../index.js';
import generateRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = generateRandomNumber(0, 100);

  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question.toString(), correctAnswer];
};

export default () => engineRun(gameDescription, getQuestionAndAnswer);
