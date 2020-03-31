import engineRun from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

 const questionAndAnswer = () => {

     let randomNumber = Math.round(Math.random() * 100);

     let correctAnswer;

     if (randomNumber % 2 === 0) {

         correctAnswer = 'yes';

     } else {

         correctAnswer = 'no';

     }

     return [randomNumber, correctAnswer];
 };

 export default () => engineRun(gameDescription, questionAndAnswer);



