import { createDataGames, createDataRange } from '../helpers.js';
import brainGameRun from '../index.js';

const task = 'What number is missing in the progression?';

const createProgression = (countOfElements, stepProgression) => {
  const initialData = [];
  let startNumber = createDataGames(10);
  for (let i = 0; i <= countOfElements; i += 1) {
    initialData.push(startNumber + stepProgression);
    startNumber += stepProgression;
  }
  return initialData;
};
const gameData = () => {
  const countOfElements = createDataRange(6, 12);
  const stepProgression = createDataRange(1, 7);
  const indexRandomReplace = createDataRange(0, countOfElements); // creating replace
  const arrayProgression = createProgression(countOfElements, stepProgression);
  const taskAnswer = String(arrayProgression[indexRandomReplace]);
  arrayProgression[indexRandomReplace] = '..';
  const question = `Question: ${arrayProgression.join(' ')}`;
  return [taskAnswer, question];
};
brainGameRun(task, gameData);

export default gameData;
