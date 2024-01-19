import readlineSync from 'readline-sync';

const greetings = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('Your answer: May I have your name?');
    console.log(`Hello, ${name}!`);
};