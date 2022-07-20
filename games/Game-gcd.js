import { getRandomInt, brainGameComm } from '../src/index.js';

const task = 'Find the greatest common divisor of given numbers.';

const gameBrain = () => {
  const number1 = getRandomInt(5);
  const number2 = getRandomInt(7);
  const quest = `Question: ${number1} ${number2}`;
  const taskGcd = () => {
    const initialData = [];
    initialData.push(number1);
    initialData.push(number2);
    let [x, y] = initialData;
    if (x === 0) {
      return y;
    }
    while (y !== 0) {
      if (x > y) {
        x -= y;
      } else {
        y -= x;
      }
    }
    return x;
  };
  const answer = String(taskGcd());
  return [answer, quest];
};
brainGameComm(task, gameBrain);
export default gameBrain;
