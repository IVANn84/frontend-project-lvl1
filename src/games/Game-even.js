import { getRandomInt, brainGameComm } from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameBrain = () => {
  const number = getRandomInt(85);
  const quest = `Question: ${number}`;
  const evenNumber = number % 2 === 0;
  const answer = evenNumber ? 'yes' : 'no';
  return [answer, quest];
};
brainGameComm(task, gameBrain);

export default gameBrain;
