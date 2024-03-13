#!/usr/bin/env node
import { getRandomNum, doGameLogic } from '../src/index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (num1, num2) => {
  if (num2 > num1) return calculateGCD(num2, num1);
  if (!num2) return num1;
  return calculateGCD(num2, num1 % num2);
};

const makeRound = () => {
  const num = getRandomNum();
  const num1 = getRandomNum();

  const question = `${num} ${num1}`;
  const correctAnswer = calculateGCD(num, num1);
  return [question, correctAnswer.toString()];
};

const launchBrainGCD = () => {
  doGameLogic(rules, makeRound);
};

launchBrainGCD();
