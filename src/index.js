import readlineSync from 'readline-sync';

const brainGameComm = (task, gameData) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(task);

  const statrRound = () => {
    const [correctAnswer, question] = gameData();
    console.log(question);
    // const counterRound = 3;

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
  const counterRound = 3;
  for (let i = 0; i < counterRound; i += 1) {
    const isCorrect = statrRound();
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default brainGameComm;
