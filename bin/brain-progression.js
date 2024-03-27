#!/usr/bin/env node
import { doGameLogic, getRandomNum } from '../src/index.js';

const rules = 'What number is missing in the progression?';

const makeProgression = () => {
  const arr = [];
  const firstNum = getRandomNum();
  const minLen = 5 + Math.floor(Math.random() * 6);
  const step = 1 + Math.floor(Math.random() * 5);

  for (let i = firstNum, y = 0; y < minLen; i += step, y += 1) {
    arr.push(i);
  }

  return arr;
};

const makeRound = () => {
  const arr = makeProgression();
  const hiddenIndex = Math.ceil(Math.random() * arr.length) - 1;
  console.log(hiddenIndex, arr.length);

  const correctAnswer = arr[hiddenIndex].toString();
  arr[hiddenIndex] = '..';
  const question = arr.join(' ');
  return [question, correctAnswer.toString()];
};

const launchBrainProgression = () => {
  doGameLogic(rules, makeRound);
};

launchBrainProgression();
