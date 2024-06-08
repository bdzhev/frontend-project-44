#!/usr/bin/env node

import playGame from '../index.js';
import genRandomNum from '../utils.js';

const introText = 'Find the greatest common divisor of given numbers.';
const maxNum = 100;
const minNum = 1;

const findGCD = (smallerNum, largerNum) => {
  if (smallerNum === 0) {
    return largerNum;
  }
  return findGCD(largerNum % smallerNum, smallerNum);
};

const gcd = () => {
  const gameRoundData = [];
  for (let i = 0; i < 3; i += 1) {
    const num1 = genRandomNum(minNum, maxNum);
    const num2 = genRandomNum(minNum, maxNum);
    const correctAnswer = (num1 > num2 ? findGCD(num2, num1) : findGCD(num1, num2)).toString();

    const expression = `${num1} ${num2}`;

    gameRoundData.push([expression, correctAnswer]);
  }
  playGame(introText, gameRoundData);
};

export default gcd;
