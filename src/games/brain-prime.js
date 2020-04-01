import engineRun from '../index.js';

import generateRandomNumber from "../utils.js";

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {

    const randomNumber = generateRandomNumber(100, 0);

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

export default () => engineRun(gameDescription, getQuestionAndAnswer);