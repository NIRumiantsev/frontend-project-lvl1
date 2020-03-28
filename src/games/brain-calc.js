import engine from '../index.js';

const gameDescription = 'What is the result of the expression?';

const questionAndAnswer = () => {

    const operators = ['+', '-', '*'];

    let randomNumberFirst = Math.round(Math.random() * 100);

    let randomNumberSecond = Math.round(Math.random() * 100);

    let randomOperator = operators[Math.round(Math.random() * 2)];

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

export default () => engine(gameDescription, questionAndAnswer);