import { getRandomInt, getRandomIntProgr } from '../helpers.js';
import brainGameComm from '../index.js';

const task = 'What number is missing in the progression?';

const gameData = () => {
  const initialData = [];
  const countOfElements = getRandomIntProgr(6, 12);
  let i = 0;
  let startNumber = getRandomInt(10); // initializing the starting number
  const stepProgression = getRandomIntProgr(1, 7); // adding step Progression
  while (i <= countOfElements) {
    initialData.push(startNumber + stepProgression);
    i += 1;
    startNumber += stepProgression;
  }
  const indexRandomReplace = getRandomIntProgr(0, countOfElements); // creating replace
  const taskAnswer = String(initialData[indexRandomReplace]);

  initialData[indexRandomReplace] = '..';
  const stringQuestion = initialData.join(' ');
  const quest = `Question: ${stringQuestion}`;
  return [taskAnswer, quest];
};
brainGameComm(task, gameData);

export default gameData;
