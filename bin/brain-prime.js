#!/usr/bin/env node
import { doGameLogic, getRandomNum } from '../src/index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 0 || num === 1) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const makeRound = () => {
  const question = getRandomNum();
  const correctAnswer = isPrime(question) === true ? 'yes' : 'no';
  return [question, correctAnswer.toString()];
};

const launchBrainPrime = () => {
  doGameLogic(rules, makeRound);
};

launchBrainPrime();
