#!/usr/bin/env node

import readLineSync from 'readline-sync';

const brainGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default brainGame;
