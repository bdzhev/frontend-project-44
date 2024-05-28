#!/usr/bin/env node
import readLineSync from 'readline-sync';

const brainEven = () => {
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`)
  const maxAttempts = 3;
  const maxNum = 100;
  const minNum = 1;

  const isEven = (number) => {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
  }

  let i = 0;

  while (i < maxAttempts) {
    let n = Math.ceil(Math.random() * (maxNum - minNum) + minNum)
    console.log(`Question: ${n}`);
    let answer = readLineSync.question(`Your answer: `);
    
    if (isEven(n) && answer === 'yes') {
      console.log('Correct!');
    }
    else if (!isEven(n) && answer === 'no') {
      console.log('Correct!');
    }
    else {
      if (answer === 'yes') {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      }
      else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      }
      break;
    }
    i += 1;
  }

  if (i < maxAttempts) {
    return false;
  }

  return true;
};

export default brainEven;