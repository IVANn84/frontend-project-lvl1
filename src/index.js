import readlineSync from 'readline-sync';

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const getRandomIntProgr = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const brainGameComm = (task, gameBrain) => {
  const userName = readlineSync.question(
    'Welcome to the Brain Games!\nMay I have your name?',
  );
  console.log(`Hello, ${userName}!`);
  console.log(task);

  const statrRound = () => {
    const resultGame = gameBrain();
    const [a, q] = resultGame;
    console.log(q);
    const correctAnswer = a;

    const userAnsver = readlineSync.question('Your answer: ');
    if (userAnsver === correctAnswer) {
      console.log('Correct!');
      return true;
    }
    console.log(
      `'${userAnsver}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
    );
    return false;
  };
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = statrRound();
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
