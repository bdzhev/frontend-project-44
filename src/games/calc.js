#!/usr/bin/env node

import playGame from '../index.js';
import genRandomNum from '../utils.js';

const introText = 'What is the result of the expression?';
const maxNum = 10;
const minNum = 1;
const operators = ['+', '-', '*'];

const calcResult = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    default:
      throw new Error(`Incorrect operator: ${operator}`);
  }
};

const genCalcRound = () => {
  const num1 = genRandomNum(minNum, maxNum);
  const num2 = genRandomNum(minNum, maxNum);
  const operator = operators[genRandomNum(0, operators.length - 1)];
  const roundQuestion = `${num1} ${operator} ${num2}`;
  const correctAnswer = calcResult(num1, num2, operator).toString();
  return [roundQuestion, correctAnswer];
};

const playCalc = () => {
  playGame(introText, genCalcRound);
};

export default playCalc;
