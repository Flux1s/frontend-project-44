#!/usr/bin/env node
import { getRandomNum, doGameLogic } from '../src/index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeRound = () => {
  const isEven = (num) => num % 2 === 0;
  const question = getRandomNum();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer.toString()];
};

const launchBrainEven = () => {
  doGameLogic(rules, makeRound);
};

launchBrainEven();
