#!/usr/bin/env node

import playGame from '../index.js';
import genRandomNum from '../utils.js';

const introText = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxNum = 100;
const minNum = 1;

const isEven = (number) => (number % 2 === 0);

const genEvenRound = () => {
  const num = genRandomNum(minNum, maxNum);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [num, correctAnswer];
};

const even = () => {
  playGame(introText, genEvenRound);
};

export default even;
