import { createDataGames } from '../helpers.js';
import brainGameRun from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};
const gameData = () => {
  const number = createDataGames(31);
  const question = `Question: ${number}`;
  const answer = isPime(number) ? 'yes' : 'no';
  return [answer, question];
};
brainGameRun(task, gameData);
export default gameData;
