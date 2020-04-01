import engineRun from '../index.js';
import generateRandomNumber from "../utils.js";

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

 const getQuestionAndAnswer = () => {

     const randomNumber = generateRandomNumber(100, 0);

     let correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no' ;

     return [randomNumber, correctAnswer];
 };

 export default () => engineRun(gameDescription, getQuestionAndAnswer);



