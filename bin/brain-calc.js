#!/usr/bin/env node
import { doGameLogic, getRandomNum } from '../src/index.js';

const rules = 'What is the result of the expression?';

const getCorrectAnswer = (num1, sign, num2) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};
const makeRound = () => {
  const operators = ['+', '-', '*'];
  const num = getRandomNum();
  const num1 = getRandomNum();
  const sign = operators[Math.floor(Math.random() * 3)];

  const question = `${num} ${sign} ${num1}`;
  const correctAnswer = getCorrectAnswer(num, sign, num1);
  return [question, correctAnswer.toString()];
};

const launchBrainCalc = () => {
  doGameLogic(rules, makeRound);
};

launchBrainCalc();
