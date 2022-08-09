import { createDataGames } from '../helpers.js';
import brainGameRun from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const gameData = () => {
  const number = createDataGames(85);
  const question = `Question: ${number}`;
  const answer = isEven(number) ? 'yes' : 'no';
  return [answer, question];
};
brainGameRun(task, gameData);

export default gameData;
