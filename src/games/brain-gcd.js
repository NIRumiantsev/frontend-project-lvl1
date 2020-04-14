import engineRun from '../index.js';

import generateRandomNumber from '../utils.js';

const findDivisor = (number1, number2) => {
  if (number1 === 0 || number2 === 0) {
    return number1 + number2;
  }

  let gcd;

  for (let divisor = 1; divisor <= Math.min(number1, number2); divisor += 1) {
    if (number1 % divisor === 0 && number2 % divisor === 0) {
      gcd = divisor;
    }
  }
  return gcd;
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const number1 = generateRandomNumber(0, 100);

  const number2 = generateRandomNumber(0, 100);

  const question = `${number1} ${number2}`;

  const correctAnswer = findDivisor(number1, number2);

  return [question, correctAnswer];
};

export default () => engineRun(gameDescription, getQuestionAndAnswer);
