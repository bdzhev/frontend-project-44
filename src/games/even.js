#!/usr/bin/env node

import { playGame, maxAttempts } from '../index.js';
import { genGameRounds } from '../utils.js';

const introText = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxNum = 100;
const minNum = 1;

const isEven = (number) => (number % 2 === 0);

const even = () => {
  const gameRounds = genGameRounds(maxAttempts, minNum, maxNum, isEven);
  playGame(introText, gameRounds);
};

export default even;
