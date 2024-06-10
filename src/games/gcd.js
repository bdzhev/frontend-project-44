#!/usr/bin/env node

import { playGame, maxAttempts } from '../index.js';
import genRandomNum from '../utils.js';

const introText = 'Find the greatest common divisor of given numbers.';
const maxNum = 100;
const minNum = 1;

const findGCD = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return findGCD(num2 % num1, num1);
};

const gcd = () => {
  const gameRoundData = [];
  for (let i = 0; i < maxAttempts; i += 1) {
    const num1 = genRandomNum(minNum, maxNum);
    const num2 = genRandomNum(minNum, maxNum);
    const correctAnswer = (findGCD(num1, num2)).toString();
    const roundQuestion = `${num1} ${num2}`;
    gameRoundData.push([roundQuestion, correctAnswer]);
  }

  playGame(introText, gameRoundData);
};

export default gcd;
