import { getRandomInt } from '../helpers.js';
import brainGameComm from '../index.js';

const task = 'What is the result of the expression?';
const gameData = () => {
  const operation = ['+', '-', '*'];
  const operand = getRandomInt(3);
  const expression = operation[operand];

  const number = getRandomInt(15);
  const number1 = getRandomInt(10);
  const quest = `Question: ${number} ${expression} ${number1}`;

  let answer = 0;

  switch (expression) {
    case '+':
      answer = number + number1;
      break;
    case '-':
      answer = number - number1;
      break;
    case '*':
      answer = number * number1;
      break;
    default:
      answer = null;
  }
  return [String(answer), quest];
};
brainGameComm(task, gameData);

export default gameData;
