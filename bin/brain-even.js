#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { userName, receivingName } from '../src/cli.js';
//  ф -ия случайного числа

const getRandomInt = () => Math.round(Math.random() * 100);

//  ф-ия проверки четности
const isEven = (number) => number % 2 === 0;

receivingName();
// console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const statrRound = () => {
  const number = getRandomInt();
  console.log(`Question: ${number}`);
  const userAnsver = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  if (userAnsver === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${userAnsver}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`
  );
  return false;
};
// ф-ия цикла игры
const brainGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = statrRound();
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
brainGame();
