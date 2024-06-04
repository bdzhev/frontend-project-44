#!/usr/bin/env node

import gameLogic from '../index.js';
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

  // Populate an array of questions and answers
  const questionsAndAnswers = [];
  for (let j = 0; j < 3; j += 1) {
    // Generate numbers and the operator
    const n1 = genRandomNum(minNum, maxNum);
    const n2 = genRandomNum(minNum, maxNum);
    const operator = operators[genRandomNum(0, operators.length)];

    // Form an expression
    const expression = `${n1} ${operator} ${n2}`;

    // Determine the correct result of each attempt
    const correctAnswer = calcResult(n1, n2, operator);

    // Push the result to the array with questions and answers
    questionsAndAnswers.push([expression, correctAnswer]);
  }

  gameLogic(introText, questionsAndAnswers);
};

export default calc;
