#!/usr/bin/env node

import { playGame, maxAttempts } from '../index.js';
import { genGameRounds } from '../utils.js';

const introText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxNum = 50;
const minNum = 1;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = () => {
  const gameRounds = genGameRounds(maxAttempts, minNum, maxNum, isPrime);
  playGame(introText, gameRounds);
};

export default prime;
