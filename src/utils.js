#!/usr/bin/env node

const genRandomNum = (minNum, maxNum) => Math.floor(Math.random()
* (maxNum + 1 - minNum) + minNum);

export default genRandomNum;
