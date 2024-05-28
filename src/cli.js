#!/usr/bin/env node

import readLineSync from 'readline-sync';
import brainEven from '../bin/brain-even.js';

const brainGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  brainEven(name);
};

export default brainGame;
