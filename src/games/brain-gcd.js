import engineRun from '../index.js';

import generateRandomNumber from '../utils.js';

const findDivisor = (firstNumber, secondNumber) => {
  if (firstNumber === 0 && secondNumber !== 0) {
    return secondNumber;
  }
  if (secondNumber === 0 && secondNumber !== 0) {
    return firstNumber;
  }
  if (secondNumber === 0 && firstNumber === 0) {
    return 0;
  }

  let result;

  for (let ind = 1; ind <= firstNumber && ind <= secondNumber; ind += 1) {
    if (firstNumber % ind === 0 && secondNumber % ind === 0) {
      result = ind;
    }
  }
  return result;
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const randomNumberFirst = generateRandomNumber(0, 100);

  const randomNumberSecond = generateRandomNumber(0, 100);

  const question = `${randomNumberFirst} ${randomNumberSecond}`;

  const correctAnswer = findDivisor(randomNumberFirst, randomNumberSecond);

  return [question, correctAnswer];
};

export default () => engineRun(gameDescription, getQuestionAndAnswer);
