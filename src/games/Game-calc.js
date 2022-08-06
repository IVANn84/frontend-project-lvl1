import { numbersDataGames } from '../helpers.js';
import brainGameComm from '../index.js';

const task = 'What is the result of the expression?';
const calculate = (number, number1, expression) => {
  let answer = 0;
  switch (expression) {
    case '+':
      answer = number + number1;
      return answer;
    case '-':
      answer = number - number1;
      return answer;
    case '*':
      answer = number * number1;
      return answer;
    default:
      return null;
  }
};
const gameData = () => {
  const operation = ['+', '-', '*'];
  const operand = numbersDataGames(operation.length - 1);
  const expression = operation[operand];

  const number = numbersDataGames(15);
  const number1 = numbersDataGames(10);
  const quest = `Question: ${number} ${expression} ${number1}`;
  const answer = calculate(number, number1, expression);

  return [String(answer), quest];
};
brainGameComm(task, gameData);

export default gameData;
