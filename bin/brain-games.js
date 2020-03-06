import readlineSync from 'readline-sync';  // The readline-sync library connection

console.log('Welcome to the Brain Games!');

export const userName = readlineSync.question('May I have your name? ');

console.log('Hello ' + userName);







