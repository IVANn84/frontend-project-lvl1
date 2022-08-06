import { numbersDataGames } from '../helpers.js';
import brainGameComm from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const gameData = () => {
  const number = numbersDataGames(85);
  const quest = `Question: ${number}`;
  const answer = isEven(number) ? 'yes' : 'no';
  return [answer, quest];
};
brainGameComm(task, gameData);

export default gameData;
