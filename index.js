import readlineSync from 'readline-sync';
import { questions } from './src/questions.js';
import { getRandomInt } from './src/cli.js';

const except = [];

function start() {
    console.log('Welcome to EGE DOTA 2!')
    const name = readlineSync.question('Enter your name: ');
    const count = readlineSync.question(`Enter number of questions (Currently there is ${questions.length} questions): `);
    let wins = 0;
    let total = 0;
    for (let i = 0; i < count; i += 1) {
        wins += question();
        total += 1;
    }
};

function question() {
    const questionNumber = getRandomInt(0, questions.length - 1, except);
    except.push(questionNumber);
    const question = questions[questionNumber];
    const correctAnswer = question.answer;
    const alternateAnswer = question.alternateAnswer;
    const answer = readlineSync.question(`${question.question}\nEnter your answer: `);
    if (question.type === 1) {
        if (correctAnswer.toLowerCase() === answer.toLowerCase() || alternateAnswer.includes(answer)) {
            console.log('Correct!');
            return 1;
        } else {
            console.log(`That's Wrong. Correct answer was: ${correctAnswer}`);
        }
    };
    if (question.type === 2) {
        const wrongAnswer = question.wrongAnswer;
        if (alternateAnswer.includes(answer)) {
            console.log('Correct!');
            return 1;
        };
        let isTrue = true;
        for (let i = 0; i < correctAnswer.length; i += 1) {
            if (!(answer.toLowerCase().includes(correctAnswer[i].toLowerCase()))) {
                isTrue = false;
            }
        }
        for (let i = 0; i < wrongAnswer.length; i += 1) {
            if (answer.toLowerCase().includes(wrongAnswer[i].toLowerCase())) {
                console.log(`That's Wrong. Correct answer was: ${correctAnswer}`);
                return 0;
            }
        }
        if (isTrue === true) {
            console.log('Correct!');
            return 1;
        } else {
            console.log(`That's Wrong. Correct answer was: ${correctAnswer}`);
        }
    }
}

start();