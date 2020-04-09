import engineRun from '../index.js';

import generateRandomNumber from '../utils.js';

const checkPrime = (number) => {
  let divisor = 1;

  for (let ind = 2; ind <= number && number % ind !== 0; ind += 1) {
    divisor = ind;
  }

  return divisor === number;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = generateRandomNumber(100, 0);

  const correctAnswer = checkPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => engineRun(gameDescription, getQuestionAndAnswer);
