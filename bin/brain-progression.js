#!/usr/bin/env node
import { doGameLogic, getRandomNum } from '../src/index.js';

const rules = 'What number is missing in the progression?';

const makeProgression = () => {
  const arr = [];
  const firstNum = getRandomNum();
  const minLen = Math.floor(Math.random() * 11);
  const step = Math.floor(Math.random() * 6);

  for (let i = firstNum, y = 0; y < minLen; i += step, y += 1) {
    arr.push(i);
  }

  return arr;
};

const makeRound = () => {
  const arr = makeProgression();
  const hiddenIndex = Math.floor(Math.random() * arr.length) - 1;

  const correctAnswer = arr[hiddenIndex].toString();
  arr[hiddenIndex] = '..';
  const question = arr.join(' ');
  return [question, correctAnswer];
};

const launchBrainProgression = () => {
  doGameLogic(rules, makeRound);
};

launchBrainProgression();
