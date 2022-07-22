import { numbersDataGames, numbersDataRange } from '../helpers.js';
import brainGameComm from '../index.js';

const task = 'What number is missing in the progression?';

const dataProgression = (countOfElements, stepProgression) => {
  const initialData = [];
  let startNumber = numbersDataGames(10);
  let i = 0;
  while (i <= countOfElements) {
    initialData.push(startNumber + stepProgression);
    i += 1;
    startNumber += stepProgression;
  }
  const indexRandomReplace = numbersDataRange(0, countOfElements); // creating replace
  const taskAnswer = String(initialData[indexRandomReplace]);

  initialData[indexRandomReplace] = '..';
  const stringQuestion = initialData.join(' ');
  const quest = `Question: ${stringQuestion}`;
  return [taskAnswer, quest];
};
const gameData = () => {
  const countOfElements = numbersDataRange(6, 12);
  const stepProgression = numbersDataRange(1, 7);
  const [answer, quest] = dataProgression(countOfElements, stepProgression);
  return [answer, quest];
};
brainGameComm(task, gameData);

export default gameData;
