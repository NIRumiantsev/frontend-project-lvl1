import engineRun from '../index.js';

import generateRandomNumber from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (firstNumber, difference, length) => {
  const progression = [];
  for (let n = 0; n <= length; n += 1) {
    progression.push(firstNumber + n * difference);
  }
  return progression;
};

const progressionLength = 10;

const getQuestionAndAnswer = () => {
  const firstNumber = generateRandomNumber(0, 100);

  const difference = generateRandomNumber(1, 10);

  const hiddenMemberIndex = generateRandomNumber(0, progressionLength);

  const progression = generateProgression(firstNumber, difference, progressionLength);

  const correctAnswer = progression[hiddenMemberIndex];

  progression[hiddenMemberIndex] = '..';

  const question = progression.join();

  return [question, correctAnswer.toString()];
};

export default () => engineRun(gameDescription, getQuestionAndAnswer);
