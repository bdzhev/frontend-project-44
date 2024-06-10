#!/usr/bin/env node

const genRandomNum = (lowerBound, upperBound) => Math.floor(Math.random()
* (upperBound + 1 - lowerBound) + lowerBound);

export default genRandomNum;
