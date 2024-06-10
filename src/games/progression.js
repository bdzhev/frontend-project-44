#!/usr/bin/env node

import { playGame, maxAttempts } from '../index.js';
import { genRandomNum } from '../utils.js';

const introText = 'What number is missing in the progression?';
const maxNum = 10;
const minNum = 1;
const numCount = 10;

const progression = () => {
  const gameRounds = [];
  for (let i = 0; i < maxAttempts; i += 1) {
    const nums = [];
    const addend = genRandomNum(minNum, maxNum);

    nums.push(genRandomNum(minNum, maxNum), ' ');
    for (let j = 1; j < numCount; j += 1) {
      nums.push(nums.at(-2) + addend);
      nums.push(' ');
    }

    const missNumIndex = [genRandomNum(0, numCount - 1) * 2];
    const correctAnswer = nums[missNumIndex].toString();
    nums[missNumIndex] = '..';
    const roundQuestion = ''.concat(...nums);
    gameRounds.push([roundQuestion, correctAnswer]);
  }

  playGame(introText, gameRounds);
};

export default progression;
