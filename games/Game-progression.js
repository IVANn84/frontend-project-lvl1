import readlineSync from 'readline-sync';
import { getRandomInt, getRandomIntProgr, userName } from '../src/index.js';

export const brainProgression = () => {
  const taskProgression = () => {
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
    const taskAnswer = initialData[indexRandomReplace];

    initialData[indexRandomReplace] = '..';
    const stringQuestion = initialData.join(' ');
    console.log(`Question: ${stringQuestion}`);
    return taskAnswer;
  };
  const answerTaskProgr = taskProgression();
  const userAnsver = Number(readlineSync.question('Your answer: '));
  if (answerTaskProgr === userAnsver) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${userAnsver}' is wrong answer ;(. Correct answer was '${answerTaskProgr}'.\nLet's try again, ${userName}!`,
  );
  return false;
};

export const brainGame = () => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = brainProgression();
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
