#!/usr/bin/env node
import readLineSync from 'readline-sync';

const gameLogic = (rightAns, expression) => {
  console.log(`Question: ${expression}`);
  const answer = readLineSync.question('Your answer: ');
  if (rightAns === answer) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAns}'.`);
    return false;
  }

};

const randomNum = (lowerBound, upperBound) => {
  return Math.floor(Math.random() * (upperBound - lowerBound) + lowerBound);
};

const calcResult = (num1, num2, operator) => {
  switch (operator){
    case '+':
      return (num1 + num2).toString();
      break;
    case '-':
      return (num1 - num2).toString();
      break;
    case '*':
      return (num1 * num2).toString();
      break;
  }
}

export {gameLogic as glogic, randomNum as randomN, calcResult as calcRes};