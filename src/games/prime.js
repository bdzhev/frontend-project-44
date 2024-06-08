#!/usr/bin/env node

import playGame from '../index.js';
import genRandomNum from '../utils.js';

const introText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxNum = 50;
const minNum = 1;
const primeNums = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

const prime = () => {
  const gameRoundData = [];
  for (let j = 0; j < 3; j += 1) {
    const num = genRandomNum(minNum, maxNum);
    if (primeNums.includes(num)) {
      gameRoundData.push([num.toString(), 'yes']);
    } else {
      gameRoundData.push([num.toString(), 'no']);
    }
  }

  playGame(introText, gameRoundData);
};

export default prime;
