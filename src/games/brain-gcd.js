import engineRun from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const questionAndAnswer = () => {

    let randomNumberFirst = Math.round(Math.random() * 100);

    let randomNumberSecond = Math.round(Math.random() * 100);

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

export default () => engineRun(gameDescription, questionAndAnswer)



