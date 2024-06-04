#!/usr/bin/env node

const genRandomNum = (lowerBound, upperBound) => Math.floor(Math.random()
* (upperBound - lowerBound) + lowerBound);

export default genRandomNum;
