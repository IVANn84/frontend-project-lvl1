import { numbersDataGames } from '../helpers.js';
import brainGameComm from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};
const gameData = () => {
  const number = numbersDataGames(31);
  const quest = `Question: ${number}`;
  const answer = isPime(number) ? 'yes' : 'no';
  return [answer, quest];
};
brainGameComm(task, gameData);
export default gameData;
