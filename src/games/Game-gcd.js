import { createDataGames } from '../helpers.js';
import brainGameRun from '../index.js';

const receive = 'Find the greatest common divisor of given numbers.';

const receiveGcd = (number1, number2) => {
  const initialData = [number1, number2];
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
  const number1 = createDataGames(5);
  const number2 = createDataGames(7);
  const question = `Question: ${number1} ${number2}`;
  const answer = String(receiveGcd(number1, number2));
  return [answer, question];
};
brainGameRun(receive, gameData);
export default gameData;
