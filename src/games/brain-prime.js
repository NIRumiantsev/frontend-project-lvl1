import engineRun from '../index.js';

import generateRandomNumber from '../utils.js';

const isPrime = (number) => {
  if (number <= 0) {
    return false;
  }

  let divisor = 1;

  for (let ind = 2; ind <= number; ind += 1) {
    if (number % ind !== 0) {
      divisor = ind;
    }
  }
  return divisor === number;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = generateRandomNumber(100, 0);

  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => engineRun(gameDescription, getQuestionAndAnswer);
