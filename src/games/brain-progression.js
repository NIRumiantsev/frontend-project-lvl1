import engineRun from '../index.js';

import generateRandomNumber from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  let randomNumber = generateRandomNumber(100, 0);

  const question = [randomNumber];

  const randomIncrease = generateRandomNumber(10, 0);

  for (let n = 0; n < 10; n += 1) {
    randomNumber += randomIncrease;

    question.push(randomNumber);
  }

  const randomLocation = generateRandomNumber(10, 0);

  const correctAnswer = question[randomLocation];

  question[randomLocation] = '..';

  return [question, correctAnswer];
};

export default () => engineRun(gameDescription, getQuestionAndAnswer);
