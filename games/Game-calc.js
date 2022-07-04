import readlineSync from 'readline-sync';
import { getRandomInt, userName } from '../src/index.js';

export const brainCalk = () => {
  const operation = ['+', '-', '*'];
  const operand = getRandomInt(3);
  const expression = operation[operand];

  const number = getRandomInt(15);
  const number1 = getRandomInt(10);
  console.log(`Question: ${number} ${expression} ${number1}`);
  const userAnsver = readlineSync.question('Your answer: ');

  let result = 0;

  switch (expression) {
    case '+':
      result = number + number1;
      break;
    case '-':
      result = number - number1;
      break;
    case '*':
      result = number * number1;
      break;
    default:
      result = null;
  }
  if (Number(userAnsver) === result) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${userAnsver}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`,
  );
  return false;
};

export const brainGame = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = brainCalk();
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
