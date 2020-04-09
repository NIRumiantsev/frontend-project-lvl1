import engineRun from '../index.js';

import generateRandomNumber from '../utils.js';

const findDivisor = (firstNumber, secondNumber) => {
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
  const randomNumberFirst = generateRandomNumber(100, 0);

  const randomNumberSecond = generateRandomNumber(100, 0);

  const question = (`${randomNumberFirst} ${randomNumberSecond}`);

  const correctAnswer = findDivisor(randomNumberFirst, randomNumberSecond);

  return [question, correctAnswer];
};

export default () => engineRun(gameDescription, getQuestionAndAnswer);
