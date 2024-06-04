#!/usr/bin/env node

import gameLogic from '../index.js';
import genRandomNum from '../utils.js';

const prime = () => {
  const introText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const maxNum = 50;
  const minNum = 1;
  const primeNums = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

  const questionsAndAnswers = [];
  // Populate an array of questions and answers
  for (let j = 0; j < 3; j += 1) {
    const num = genRandomNum(minNum, maxNum);
    // Determine the right answer
    if (primeNums.includes(num)) {
      questionsAndAnswers.push([num.toString(), 'yes']);
    } else {
      questionsAndAnswers.push([num.toString(), 'no']);
    }
  }

  gameLogic(introText, questionsAndAnswers);
};

export default prime;
