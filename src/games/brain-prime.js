import engine from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const questionAndAnswer = () => {

    let randomNumber = Math.round(Math.random() * 100);

    let divisor = 1;

    let correctAnswer = '';

    for(let ind = 2; ind <= randomNumber && randomNumber % ind !== 0 ; ind++) {

        divisor = ind;

    }

    if (divisor === randomNumber) {

        correctAnswer = 'yes';

    } else {

        correctAnswer = 'no';

    }

    return [randomNumber, correctAnswer];

};

export default () => engine(gameDescription, questionAndAnswer);