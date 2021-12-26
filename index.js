let readlineSync = require("readline-sync");

let userName = readlineSync.question("What is your name ? ")

let score = 0;

console.log("Welcome ", userName ,"to the game on how well you know Zabih");

console.log("------------------------------------------------")


function questions(question,answer) {
  let userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right answer");
    score = score + 1;
    
  } else {
    console.log("wrong!!!")
     
  }
  
  console.log("currrent score is ", score)
  console.log("------------------")
}

let allQuestions = [{
  question: "What is my favourite ice cream ",
  answer:"Butterscoth"
}, {
  question: "What is my favourite colour ",
  answer:"blue"
}, {
  question: "Where do I live ",
  answer:"hyderabad"
 } ,{
     question: "What is my favourite sport ",
  answer:"Badminton"
   }
];

for (let i=0; i<allQuestions.length; i++ ){
  let currentQuestion = allQuestions[i];
  questions(currentQuestion.question,currentQuestion.answer)

}

console.log("final score = ", score)
if(score === 4) {
 
  console.log("YAY you got all of them right")

} else {
  console.log("You got",score,"of them right" )
}