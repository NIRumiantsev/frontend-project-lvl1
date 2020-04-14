import engineRun from '../index.js';

import generateRandomNumber from '../utils.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let divisor = 2; divisor <= number; divisor += 1) {
    if (number % divisor === 0) {
      return divisor === number;
    }
  }
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  let question = generateRandomNumber(0, 100);

  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question.toString(), correctAnswer];
};

export default () => engineRun(gameDescription, getQuestionAndAnswer);
