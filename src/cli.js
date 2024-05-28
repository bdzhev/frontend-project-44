#!/usr/bin/env node

import readLineSync from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
};

export default getUserName;
