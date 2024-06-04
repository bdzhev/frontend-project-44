#!/usr/bin/env node

import gameLogic from '../index.js';
import genRandomNum from '../utils.js';

const even = () => {
  const introText = 'Answer "yes" if the number is even, otherwise answer "no".';
  const maxNum = 100;
  const minNum = 1;

  const checkEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

  // Populate an array of questions and answers
  const questionsAndAnswers = [];
  for (let j = 0; j < 3; j += 1) {
    const num = genRandomNum(minNum, maxNum);
    const correctAnswer = checkEven(num);
    questionsAndAnswers.push([num.toString(), correctAnswer]);
  }

  gameLogic(introText, questionsAndAnswers);
};

export default even;
