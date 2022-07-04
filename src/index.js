import readlineSync from 'readline-sync';

// ф-ия зароса иммени
export const userName = readlineSync.question(
  'Welcome to the Brain Games!\nMay I have your name?',
);

export const receivingName = () => console.log(`Hello, ${userName}!`);

//  ф -ия случайного числа
export const getRandomInt = (max) => Math.floor(Math.random() * max);

// ф-ия случайного числа в диапазоне
export const getRandomIntProgr = (min, max) => Math.floor(Math.random() * (max - min) + min);
