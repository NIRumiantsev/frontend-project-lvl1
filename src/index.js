import readlineSync from 'readline-sync';

const engineRun = (gameDescription, getQuestionAndAnswer) => {

    console.log('Welcome to the Brain Games!');

    const name = readlineSync.question('May I have your name? ');

    console.log(`Hello ${name}`);

    console.log(gameDescription);

    const count = 3;

    for (let i = 0; i < count; i += 1) {

        const [question, correctAnswer] = getQuestionAndAnswer();

        console.log(`Question: ${question}`);

        let answer = readlineSync.question('Your answer: ');

        if ((typeof answer === "string" && correctAnswer == answer.toLowerCase()) || (correctAnswer == answer)) {
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







