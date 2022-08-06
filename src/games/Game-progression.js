import { numbersDataGames, numbersDataRange } from '../helpers.js';
import brainGameComm from '../index.js';

const task = 'What number is missing in the progression?';

const createProgression = (countOfElements, stepProgression) => {
  const initialData = [];
  let startNumber = numbersDataGames(10);
  let i = 0;
  while (i <= countOfElements) {
    initialData.push(startNumber + stepProgression);
    i += 1;
    startNumber += stepProgression;
  }
  return initialData;
};
const gameData = () => {
  const countOfElements = numbersDataRange(6, 12);
  const stepProgression = numbersDataRange(1, 7);
  const indexRandomReplace = numbersDataRange(0, countOfElements); // creating replace
  const arrayProgression = createProgression(countOfElements, stepProgression);
  const taskAnswer = String(arrayProgression[indexRandomReplace]);
  arrayProgression[indexRandomReplace] = '..';
  const stringQuestion = arrayProgression.join(' ');
  const quest = `Question: ${stringQuestion}`;
  return [taskAnswer, quest];
};
brainGameComm(task, gameData);

export default gameData;
