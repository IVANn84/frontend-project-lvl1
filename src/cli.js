import readlineSync from 'readline-sync';

export const userName = readlineSync.question(
  'Welcome to the Brain Games!\nMay I have your name? '
);
export const receivingName = () => console.log(`Hello,${userName}!`);
