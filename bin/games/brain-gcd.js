#!/usr/bin/env node
import {
  glogic, randomN, findGCD, printResult,
} from '../../src/index.js';
import getName from '../../src/cli.js';

const name = getName();

console.log('Find the greatest common divisor of given numbers.');
const maxAttempts = 3;
const maxNum = 100;
const minNum = 1;

let j = 0;
let isAnswerCorrect = true;
while (j < maxAttempts && isAnswerCorrect === true) {
  // Generate numbers and the gcd
  const n1 = randomN(minNum, maxNum);
  const n2 = randomN(minNum, maxNum);

  const gcd = findGCD(n1, n2).toString();

  // Form an expression
  const expression = `${n1} ${n2}`;

  // Run the main game logic
  isAnswerCorrect = glogic(gcd, expression);
  if (isAnswerCorrect === true) {
    j += 1;
  }
}

printResult(j, maxAttempts, name);
