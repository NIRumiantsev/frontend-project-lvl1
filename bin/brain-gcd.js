import readlineSync from "readline-sync";

import {userName} from './brain-games.js';

console.log('Find the greatest common divisor of given numbers.');

let answerFlag = true;

for (let i = 0; i < 3 && answerFlag === true; i++) {

    let randomNumberFirst = Math.round(Math.random() * 100);

    let randomNumberSecond = Math.round(Math.random() * 100);

    console.log(`${randomNumberFirst} ${randomNumberSecond}`);

    const userAnswer = readlineSync.question('Your answer: ');

    let correctAnswer;

    for(let ind = 1; ind <= randomNumberFirst && ind <= randomNumberSecond; ind++) {

        if (randomNumberFirst % ind !== 0 || randomNumberSecond % ind !== 0) {

            continue;

        }

        correctAnswer = ind;

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