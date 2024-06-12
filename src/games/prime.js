#!/usr/bin/env node

import playGame from '../index.js';
import genRandomNum from '../utils.js';

const introText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxNum = 50;
const minNum = 1;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const genPrimeRound = () => {
  const num = genRandomNum(minNum, maxNum);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [num, correctAnswer];
};

const playPrime = () => {
  playGame(introText, genPrimeRound);
};

export default playPrime;
