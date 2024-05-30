#!/usr/bin/env node
import { glogic, randomN, printResult } from '../../src/index.js';
import getName from '../../src/cli.js';

const name = getName();

console.log('What number is missing in the progression?');
const maxAttempts = 3;
const numsInArr = 10;
const maxNum = 10;
const minNum = 1;

let j = 0;
let isAnswerCorrect = true;
while (j < maxAttempts && isAnswerCorrect === true) {
  // Generate an array of nums
  const progArr = [];
  // Number that will be added
  const progNum = randomN(minNum, maxNum);
  progArr.push(randomN(minNum, maxNum), ' ');

  // Populate the array with spaces in between
  for (let i = 1; i < numsInArr; i += 1) {
    progArr.push(progArr.at(-2) + progNum);
    progArr.push(' ');
  }
  // Generate a random index of an element of the array
  // Numbers have even index
  const corrAnsIndex = [randomN(0, numsInArr) * 2];
  const correctAnswer = progArr[corrAnsIndex].toString();
  progArr[corrAnsIndex] = '...';

  // Form an expression
  // Insert spaces so the expression can be formed
  const expression = ''.concat(...progArr);

  // Run the main game logic
  isAnswerCorrect = glogic(correctAnswer, expression);
  j += 1;
}

printResult(j, maxAttempts, name);
