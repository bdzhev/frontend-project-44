#!/usr/bin/env node

import readLineSync from 'readline-sync';

const maxAttempts = 3;

const playGame = (introQuestion, gameRoundTasks) => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(introQuestion);

  for (let i = 0; i < maxAttempts; i += 1) {
    const [roundQuestion, correctAnswer] = gameRoundTasks[i];
    console.log(`Question: ${roundQuestion}`);
    const userAnswer = readLineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
