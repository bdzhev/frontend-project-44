#!/usr/bin/env node

import playGame from '../index.js';
import genRandomNum from '../utils.js';

const calcResult = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return (num1 + num2).toString();
    case '-':
      return (num1 - num2).toString();
    case '*':
      return (num1 * num2).toString();
    default:
      return null;
  }
};

const calc = () => {
  const introText = 'What is the result of the expression?';
  const maxNum = 10;
  const minNum = 1;
  const operators = ['+', '-', '*'];

  const gameRoundData = [];
  for (let j = 0; j < 3; j += 1) {
    const n1 = genRandomNum(minNum, maxNum);
    const n2 = genRandomNum(minNum, maxNum);
    const operator = operators[genRandomNum(0, operators.length)];

    const expression = `${n1} ${operator} ${n2}`;

    const correctAnswer = calcResult(n1, n2, operator);

    gameRoundData.push([expression, correctAnswer]);
  }

  playGame(introText, gameRoundData);
};

export default calc;
