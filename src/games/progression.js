#!/usr/bin/env node

import playGame from '../index.js';
import genRandomNum from '../utils.js';

const introText = 'What number is missing in the progression?';
const maxNum = 10;
const minNum = 1;
const numCount = 10;

const genProgression = (progressionLen, addend, startNum) => {
  const progressionNums = [];
  for (let i = 0; i < progressionLen; i += 1) {
    const nextProgressionNum = startNum + i * addend;
    progressionNums.push(nextProgressionNum);
  }
  return progressionNums;
};

const genProgressionRound = () => {
  const addend = genRandomNum(minNum, maxNum);
  const startNum = genRandomNum(minNum, maxNum);
  const progressionNums = genProgression(numCount, addend, startNum);
  const missingNumIndex = genRandomNum(0, numCount - 1);
  const correctAnswer = progressionNums[missingNumIndex].toString();
  progressionNums[missingNumIndex] = '..';
  const roundQuestion = progressionNums.join(' ');
  return [roundQuestion, correctAnswer];
};

const progression = () => {
  playGame(introText, genProgressionRound);
};

export default progression;
