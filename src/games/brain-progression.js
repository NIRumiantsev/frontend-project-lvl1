import engineRun from '../index.js';

import generateRandomNumber from "../utils.js";

const gameDescription = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {

    let randomNumber = generateRandomNumber(100, 0);

    let question = [randomNumber];

    let randomIncrease = generateRandomNumber(10, 0);

    for (let n = 0; n < 10; n++) {

        randomNumber += randomIncrease;

        question.push(randomNumber);

    }

    let randomLocation = generateRandomNumber(10, 0);

    let correctAnswer = question[randomLocation];

    question[randomLocation] = '..';

    return [question, correctAnswer]

};

export default () => engineRun(gameDescription, getQuestionAndAnswer);