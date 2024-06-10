#!/usr/bin/env node

const genRandomNum = (lowerBound, upperBound) => Math.floor(Math.random()
* (upperBound + 1 - lowerBound) + lowerBound);

const genGameRounds = (maxAttempts, minNum, maxNum, validationFunc) => {
  const gameRounds = [];
  for (let i = 0; i < maxAttempts; i += 1) {
    const num = genRandomNum(minNum, maxNum);
    const correctAnswer = validationFunc(num) ? 'yes' : 'no';
    gameRounds.push([num.toString(), correctAnswer]);
  }
  return gameRounds;
};

export { genRandomNum, genGameRounds };
