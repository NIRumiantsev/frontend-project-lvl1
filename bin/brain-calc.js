import readlineSync from "readline-sync";

import {userName} from './brain-games.js';

console.log('What is the result of the expression?');

let answerFlag = true;

for (let i = 0; i < 3 && answerFlag === true; i++) {

    const operators = ['+', '-', '*'];

    let randomNumberFirst = Math.round(Math.random() * 100);

    let randomNumberSecond = Math.round(Math.random() * 100);

    let randomOperator = operators[Math.round(Math.random() * 3)];

    console.log(`${randomNumberFirst} ${randomOperator} ${randomNumberSecond}`);

    const userAnswer = readlineSync.question('Your answer: ');

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

    if (Number(userAnswer) === correctAnswer) {

        console.log('Correct!');

    } else {

        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
                Let's try again, ${userName}`)

        answerFlag = false;

    }

}

if (answerFlag === false) {

    console.log('');

} else {

    console.log(`Congratulations, ${userName}!`);

}