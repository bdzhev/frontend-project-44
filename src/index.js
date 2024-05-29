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

const findGCD = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  } else if (num1 > num2) {
    for (let i = num1; i > 0; i -= 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        return i;
      }
    }
  } else {
    for(let i = num2; i > 0; i -= 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        return i;
      }
    }
  }
  return 1;
};

export {gameLogic as glogic, randomNum as randomN, calcResult as calcRes, findGCD as findGCD};