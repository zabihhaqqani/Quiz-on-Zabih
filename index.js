let readlineSync = require("readline-sync");

// const chalk = require('chalk');

//Taking input from the user//

let userName = readlineSync.question("What is your name ?\n")

let score = 0;

console.log("Welcome ", userName, "to the game on how well you know Zabih\n");

console.log("------------------------------------------------")

// processing the data //

function questions(question, answer) {
  let userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right answer\n");
    score = score + 1;

  } else {
    console.log("wrong!!!\n")

  }

  console.log("currrent score is ", score)
  console.log("------------------")
}

let allQuestions = [{
  question: "What is my favourite ice cream ",
  answer: "Butterscotch"
}, {
  question: "What is my favourite colour ",
  answer: "blue"
}, {
  question: "Where do I live ",
  answer: "hyderabad"
}, {
  question: "What is my favourite sport ",
  answer: "Badminton"
}, {
  question: "What is my college name in short ",
  answer: "MJCET"
}, {
  question: "What is my other name ",
  answer: "faisal"
}
];

// giving the output //


for (let i = 0; i < allQuestions.length; i++) {
  let currentQuestion = allQuestions[i];
  questions(currentQuestion.question, currentQuestion.answer)

}

console.log("final score = ", score)
if (score === 4) {

  console.log("YAY you got all of them right")

} else {
  console.log("You got", score, "of them right")
}