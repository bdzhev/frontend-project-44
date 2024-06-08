#!/usr/bin/env node

import playGame from '../index.js';
import genRandomNum from '../utils.js';

const introText = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxNum = 100;
const minNum = 1;

const even = () => {
  const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

  const gameRoundData = [];
  for (let j = 0; j < 3; j += 1) {
    const num = genRandomNum(minNum, maxNum);
    const correctAnswer = isEven(num);
    gameRoundData.push([num.toString(), correctAnswer]);
  }

  playGame(introText, gameRoundData);
};

export default even;
