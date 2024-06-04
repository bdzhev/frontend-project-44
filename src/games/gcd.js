#!/usr/bin/env node

import gameLogic from '../index.js';
import genRandomNum from '../utils.js';

// Recursive function to find the GCD
const findGCD = (smallerNum, largerNum) => {
  if (smallerNum === 0) {
    return largerNum;
  }
  return findGCD(largerNum % smallerNum, smallerNum);
};

const gcd = () => {
  const introText = 'Find the greatest common divisor of given numbers.';
  const maxNum = 100;
  const minNum = 1;

  // Populate an array of question and answers
  const questionsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    // Generate numbers and find the gcd
    const num1 = genRandomNum(minNum, maxNum);
    const num2 = genRandomNum(minNum, maxNum);
    const correctAnswer = (num1 > num2 ? findGCD(num2, num1) : findGCD(num1, num2)).toString();

    // Form an expression
    const expression = `${num1} ${num2}`;

    // Add the pair to the array
    questionsAndAnswers.push([expression, correctAnswer]);
  }
  gameLogic(introText, questionsAndAnswers);
};

export default gcd;
