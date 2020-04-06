import readlineSync from 'readline-sync';

const count = 3;

const engineRun = (gameDescription, getQuestionAndAnswer) => {

    console.log('Welcome to the Brain Games!');

    const name = readlineSync.question('May I have your name? ');

    console.log(`Hello ${name}`);

    console.log(gameDescription);

    for (let i = 0; i < count; i += 1) {

        const [question, correctAnswer] = getQuestionAndAnswer();

        console.log(`Question: ${question}`);

        let answer = readlineSync.question('Your answer: ');

        if (correctAnswer == answer.toLowerCase()) {
            console.log('Correct!');
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}`);

};

export default engineRun;







