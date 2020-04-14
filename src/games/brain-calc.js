/* eslint no-eval: 0 */ // --> OFF

import engineRun from '../index.js';

import generateRandomNumber from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getQuestionAndAnswer = () => {
  const randomNumberFirst = generateRandomNumber(0, 100);

  const randomNumberSecond = generateRandomNumber(0, 100);

  const randomOperator = operators[generateRandomNumber(operators.length - 1, 0)];

  const question = `${randomNumberFirst} ${randomOperator} ${randomNumberSecond}`;

  let correctAnswer;

  switch (randomOperator) {
    case '+':
      correctAnswer = randomNumberFirst + randomNumberSecond;
      break;
    case '-':
      correctAnswer = randomNumberFirst - randomNumberSecond;
      break;
    case '*':
      correctAnswer = randomNumberFirst * randomNumberSecond;
      break;
    default: console.log('Please try again');
  }

  return [question, correctAnswer];
};

export default () => engineRun(gameDescription, getQuestionAndAnswer);
