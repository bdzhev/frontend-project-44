#!/usr/bin/env node
import { glogic, randomN } from '../../src/index.js';
import getName from '../../src/cli.js';

// Get the name of the user
const name = getName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const maxAttempts = 3;
const maxNum = 100;
const minNum = 1;

let j = 0;
let isAnswerCorrect = true;
while (j < maxAttempts && isAnswerCorrect === true) {
  // Generate the ranodom number
  const n = randomN(minNum, maxNum);
  // Check if the number is even or not, save the correct answer
  const result = [];
  if (n % 2 === 0) {
    result.push('yes');
  } else {
    result.push('no');
  }

  // Run the main game logic
  isAnswerCorrect = glogic(result[0], n);
  j += 1;
}

if (j < maxAttempts) {
  console.log(`Let's try again, ${name}!`);
} else {
  console.log(`Congratulations, ${name}!`);
}
