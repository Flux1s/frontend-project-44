import readlineSync from 'readline-sync';

export const doGameLogic = (rules, startRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = startRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
export const getRandomNum = () => Math.floor(Math.random() * 51);
