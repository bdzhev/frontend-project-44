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
  // Function compares if the n1 and n2 is divisible by the current number
  const checkForGCD = (n1, n2) => {
    for (let i = n1; i > 0; i -= 1) {
      if (n1 % i === 0 && n2 % i === 0) {
        return i;
      }
    }
  };

  if (num1 === num2) {
    return num1;
  }

  let result = 0;
  if (num1 > num2) {
    result = checkForGCD(num1, num2);
  } else {
    result = checkForGCD(num2, num1);
  }
  return result;
};







const printResult = (currIndex, maxAttempts, name) => {
  if (currIndex < maxAttempts) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

export {gameLogic as glogic, randomNum as randomN, calcResult as calcRes, findGCD as findGCD, printResult as printResult};