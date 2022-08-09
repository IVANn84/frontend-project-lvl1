import readlineSync from 'readline-sync';

const brainGameRun = (task, gameData) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(task);

  const counterRound = 3;
  for (let i = 0; i < counterRound; i += 1) {
    const [correctAnswer, question] = gameData();
    console.log(question);
    const userAnsver = readlineSync.question('Your answer: ');
    if (userAnsver === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnsver}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainGameRun;
