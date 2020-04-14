import engineRun from '../index.js';

import generateRandomNumber from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (startNumber, difference, length) => {
  const progression = [];
  for (let n = 0; n < length; n += 1) {
    startNumber += difference;

    progression.push(startNumber);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  let randomNumber = generateRandomNumber(0, 100);

  const difference = generateRandomNumber(0, 10);

  const location = generateRandomNumber(0, 10);

  const progressionLength = 10;

  const question = generateProgression(randomNumber, difference, progressionLength);

  const correctAnswer = question[location];

  question[location] = '..';

  return [question, correctAnswer];
};

export default () => engineRun(gameDescription, getQuestionAndAnswer);
