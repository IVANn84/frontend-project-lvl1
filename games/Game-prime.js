import readlineSync from 'readline-sync';
import { getRandomInt, userName } from '../src/index.js';

export const brainPrime = () => {
  const isPime = () => {
    const number = getRandomInt(31);
    console.log(`Question: ${number}`);
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  };
  const correctAnswer = isPime() ? 'yes' : 'no';
  const userAnsver = readlineSync.question('Your answer: ');
  if (userAnsver === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${userAnsver}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
  );
  return false;
};

export const brainGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = brainPrime();
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
