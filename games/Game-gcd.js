import readlineSync from 'readline-sync';
import { getRandomInt, userName } from '../src/index.js';

export const brainGcd = () => {
  const taskGcd = () => {
    const initialData = [];
    const number1 = getRandomInt(5);
    const number2 = getRandomInt(7);
    console.log(`Question: ${number1} ${number2}`);
    initialData.push(number1);
    initialData.push(number2);
    let [x, y] = initialData;
    if (x === 0) {
      return y;
    }
    while (y !== 0) {
      if (x > y) {
        x -= y;
      } else {
        y -= x;
      }
    }
    return x;
  };
  const answerTaskGcd = taskGcd();
  const userAnsver = Number(readlineSync.question('Your answer: '));
  if (userAnsver === answerTaskGcd) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${userAnsver}' is wrong answer ;(. Correct answer was '${answerTaskGcd}'.\nLet's try again, ${userName}!`,
  );
  return false;
};

export const brainGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = brainGcd();
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
