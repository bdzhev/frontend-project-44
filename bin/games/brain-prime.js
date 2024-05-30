#!/usr/bin/env node
import { glogic, randomN, printResult } from '../../src/index.js';
import getName from '../../src/cli.js';

const name = getName();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const maxAttempts = 3;
const maxNum = 50;
const minNum = 1;
const primeNums = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

let j = 0;
let isAnswerCorrect = true;
while (j < maxAttempts && isAnswerCorrect === true) {
  // Generate numbers and the operator
  const num = randomN(minNum, maxNum);
  const result = [];
  if (primeNums.includes(num)) {
    result.push('yes');
  } else {
    result.push('no');
  }

  // Form an expression
  const expression = `${num}`;

  // Determine the correct result of each attempt

  // Run the main game logic
  isAnswerCorrect = glogic(result[0], expression);
  if (isAnswerCorrect === true) {
    j += 1;
  }
}

printResult(j, maxAttempts, name);
