import engineRun from '../index.js';

import generateRandomNumber from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  let randomNumber = generateRandomNumber(0, 100);

  const question = [randomNumber];

  const randomIncrease = generateRandomNumber(0, 10);

  for (let n = 0; n < 10; n += 1) {
    randomNumber += randomIncrease;

    question.push(randomNumber);
  }

  const randomLocation = generateRandomNumber(0, 10);

  const correctAnswer = question[randomLocation];

  question[randomLocation] = '..';

  return [question, correctAnswer];
};

export default () => engineRun(gameDescription, getQuestionAndAnswer);
