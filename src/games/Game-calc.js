import { createDataGames } from '../helpers.js';
import brainGameRun from '../index.js';

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
  const typeOfOperation = createDataGames(operation.length - 1);
  const expression = operation[typeOfOperation];

  const number = createDataGames(15);
  const number1 = createDataGames(10);
  const question = `Question: ${number} ${expression} ${number1}`;
  const answer = calculate(number, number1, expression);

  return [String(answer), question];
};
brainGameRun(task, gameData);

export default gameData;
