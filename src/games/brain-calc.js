import engineRun from '../index.js';

import generateRandomNumber from '../utils.js'

const gameDescription = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {

    const randomNumberFirst = generateRandomNumber(100, 0);

    const randomNumberSecond = generateRandomNumber(100, 0);

    const operators = ['+', '-', '*'];

    let randomOperator = operators[generateRandomNumber(2, 0)];

    const randomExpression = (`${randomNumberFirst} ${randomOperator} ${randomNumberSecond}`);

    let correctAnswer;

    if (randomOperator === '+') {

        correctAnswer = randomNumberFirst + randomNumberSecond;

    }

    if (randomOperator === '-') {

        correctAnswer = randomNumberFirst - randomNumberSecond;

    }

    if (randomOperator === '*') {

        correctAnswer = randomNumberFirst * randomNumberSecond;

    }

    return [randomExpression, correctAnswer];
};

export default () => engineRun(gameDescription, getQuestionAndAnswer);