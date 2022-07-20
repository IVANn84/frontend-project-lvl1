import { getRandomInt, brainGameComm } from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameBrain = () => {
  const number = getRandomInt(31);
  const quest = `Question: ${number}`;
  const isPime = () => {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  };
  const answer = isPime() ? 'yes' : 'no';
  return [answer, quest];
};
brainGameComm(task, gameBrain);
export default gameBrain;
