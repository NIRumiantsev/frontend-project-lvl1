/* eslint no-eval: 0 */ // --> OFF

import engineRun from '../index.js';

import generateRandomNumber from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getQuestionAndAnswer = () => {
  const number1 = generateRandomNumber(0, 100);

  const number2 = generateRandomNumber(0, 100);

  const operator = operators[generateRandomNumber(0, operators.length - 1)];

  const question = `${number1} ${operator} ${number2}`;

  const correctAnswer = calculate(number1, operator, number2);

  return [question, correctAnswer.toString()];
};

export default () => engineRun(gameDescription, getQuestionAndAnswer);
