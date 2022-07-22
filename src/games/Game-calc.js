import { numbersDataGames } from '../helpers.js';
import brainGameComm from '../index.js';

const task = 'What is the result of the expression?';
const calculator = (number, number1, expression) => {
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
  return answer;
};
const gameData = () => {
  const operation = ['+', '-', '*'];
  const operand = numbersDataGames(3);
  const expression = operation[operand];

  const number = numbersDataGames(15);
  const number1 = numbersDataGames(10);
  const quest = `Question: ${number} ${expression} ${number1}`;
  const answer = calculator(number, number1, expression);

  return [String(answer), quest];
};
brainGameComm(task, gameData);

export default gameData;
