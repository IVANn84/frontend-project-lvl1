import { numbersDataGames } from '../helpers.js';
import brainGameComm from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const taskGcd = (number1, number2) => {
  const initialData = [];
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
const gameData = () => {
  const number1 = numbersDataGames(5);
  const number2 = numbersDataGames(7);
  const quest = `Question: ${number1} ${number2}`;
  const answer = String(taskGcd(number1, number2));
  return [answer, quest];
};
brainGameComm(task, gameData);
export default gameData;
