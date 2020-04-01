import engineRun from '../index.js';

import generateRandomNumber from '../utils.js'

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {

    const randomNumberFirst = generateRandomNumber(100, 0);

    const randomNumberSecond = generateRandomNumber(100, 0);

    const randomNumbers = (`${randomNumberFirst} ${randomNumberSecond}`);

    let correctAnswer;

    for (let ind = 1; ind <= randomNumberFirst && ind <= randomNumberSecond; ind++) {

        if (randomNumberFirst % ind !== 0 || randomNumberSecond % ind !== 0) {

            continue;

        }

        correctAnswer = ind;

    }

    return [randomNumbers, correctAnswer];

};

export default () => engineRun(gameDescription, getQuestionAndAnswer)



