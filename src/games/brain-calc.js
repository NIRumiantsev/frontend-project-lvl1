/* eslint no-eval: 0 */ // --> OFF

import engineRun from '../index.js';

import generateRandomNumber from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const randomNumberFirst = generateRandomNumber(100, 0);

  const randomNumberSecond = generateRandomNumber(100, 0);

  const operators = ['+', '-', '*'];

  const randomOperator = operators[generateRandomNumber(2, 0)];

  const question = (`${randomNumberFirst} ${randomOperator} ${randomNumberSecond}`);

  const correctAnswer = eval(question);

  return [question, correctAnswer];
};

export default () => engineRun(gameDescription, getQuestionAndAnswer);
