import readlineSync from "readline-sync";

import {userName} from './brain-games.js';

console.log('What number is missing in the progression?');

let answerFlag = true;

for (let i = 0; i < 3 && answerFlag === true; i++) {

    let randomNumber = Math.round(Math.random() * 100);

    let progression = [randomNumber];

    let randomIncrease = Math.round(Math.random() * 10);

    for (let n = 0; n < 10; n++) {

        randomNumber += randomIncrease;

        progression.push(randomNumber);

    }

    let randomLocation = Math.round(Math.random() * 10);

    let correctAnswer = progression[randomLocation];

    progression[randomLocation] = '..';

    console.log(progression.join(' '));

    const userAnswer = readlineSync.question('Your answer: ');

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