#!/usr/bin/env node

import gameLogic from '../index.js';
import genRandomNum from '../utils.js';

const progression = () => {
  const introText = 'What number is missing in the progression?';
  const maxNum = 10;
  const minNum = 1;
  const numCount = 10;

  // Populate an array of questions and answers
  const questionsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    // Generate an array of nums
    const nums = [];
    // Generate the addend that will be added to next one in progression
    const addend = genRandomNum(minNum, maxNum);

    // Generate the first number of the expression
    nums.push(genRandomNum(minNum, maxNum), ' ');
    // Populate the array with spaces in between
    for (let j = 1; j < numCount; j += 1) {
      nums.push(nums.at(-2) + addend);
      nums.push(' ');
    }

    // Generate the index of a missing number - index of a number is even
    const missNumIndex = [genRandomNum(0, numCount) * 2];

    // Save the correct answer and replace it with dots in nums
    const correctAnswer = nums[missNumIndex].toString();
    nums[missNumIndex] = '..';

    // Form an expression
    const expression = ''.concat(...nums);

    questionsAndAnswers.push([expression, correctAnswer]);
  }

  gameLogic(introText, questionsAndAnswers);
};

export default progression;
