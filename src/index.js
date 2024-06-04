#!/usr/bin/env node

import readLineSync from 'readline-sync';

const gameLogic = (introQuestion, questionsAndAnswers) => {
  const maxAttempts = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(introQuestion);

  for (let i = 0; i < maxAttempts; i += 1) {
    console.log(`Question: ${questionsAndAnswers[i][0]}`);
    const answer = readLineSync.question('Your answer: ');
    if (questionsAndAnswers[i][1] !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionsAndAnswers[i][1]}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default gameLogic;
