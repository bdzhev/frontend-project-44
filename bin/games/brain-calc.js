#!/usr/bin/env node
import {
  glogic, randomN, calcRes, printResult,
} from '../../src/index.js';
import getName from '../../src/cli.js';

const name = getName();

console.log('What is the result of the expression?');
const maxAttempts = 3;
const maxNum = 10;
const minNum = 1;
const operatorsArr = ['+', '-', '*'];

let j = 0;
let isAnswerCorrect = true;
while (j < maxAttempts && isAnswerCorrect === true) {
  // Generate numbers and the operator
  const n1 = randomN(minNum, maxNum);
  const n2 = randomN(minNum, maxNum);
  const operator = operatorsArr[randomN(0, operatorsArr.length)];

  // Form an expression
  const expression = `${n1} ${operator} ${n2}`;

  // Determine the correct result of each attempt
  const result = calcRes(n1, n2, operator);

  // Run the main game logic
  isAnswerCorrect = glogic(result, expression);
  j += 1;
}

printResult(j, maxAttempts, name);
