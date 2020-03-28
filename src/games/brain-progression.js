import engine from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const questionAndAnswer = () => {

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

    return [progression, correctAnswer]

};

export default () => engine(gameDescription, questionAndAnswer);