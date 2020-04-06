import engineRun from '../index.js';

import generateRandomNumber from "../utils.js";

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {

    const question = generateRandomNumber(100, 0);

    let divisor = 1;

    for(let ind = 2; ind <= question && question % ind !== 0 ; ind++) {

        divisor = ind;

    }

    let correctAnswer = divisor === question ? 'yes' : 'no';

    return [question, correctAnswer];

};

export default () => engineRun(gameDescription, getQuestionAndAnswer);