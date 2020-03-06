import readlineSync from 'readline-sync';  // The readline-sync library connection

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

console.log('Hello ' + userName);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let answerFlag = true;

for (let i = 0; i < 3 && answerFlag === true; i++) {

    let randomNumber = Math.round(Math.random() * 100);

    console.log(randomNumber);

    const userAnswer = readlineSync.question('Your answer: ');

    let correctAnswer;

    if (randomNumber % 2 === 0) {

        correctAnswer = 'yes';

    } else {

        correctAnswer = 'no';

    }

    if (userAnswer.toLowerCase() === correctAnswer) {

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





