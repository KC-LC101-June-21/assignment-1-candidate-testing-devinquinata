const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 

let candidateName;

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question;
let correctAnswer;
let candidateAnswer;
let q1 = "Who was the first American woman in space?";
let q2 = "True or false: 5 kilometer == 5000 meters?";
let q3 = "(5 + 3)/2 * 10 = ?";
let q4 = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?";
let q5 = "What is the minimum crew size for the ISS?";
let questions = [q1, q2, q3, q4, q5];
let a1 = "Sally Ride";
let a2 = 	"true";
let a3 = 	"40";
let a4 = "Trajectory";
let a5 = 	"3";
let correctAnswers = [a1, a2, a3, a4, a5];
let candidateAnswers;



function askForName() {
  // TODO 1.1b: Ask for candidate's name //

let Name = (input.question("Enter Name: "))
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

let ca1 = (input.question(q1));
let ca2 = (input.question(q2));
let ca3 = (input.question(q3));
let ca4 = (input.question(q4));
let ca5 = (input.question(q5));

}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

console.log("You answered question 1 with ${ca1}."); 
  if (ca1 = a1) {
    console.log("That is correct!")
  } else {
    console.log("That is incorrect!")
  }
console.log("You answered question 1 with ${ca2}."); 

  if (ca2 = a2) {
    console.log("That is correct!")
  } else {
    console.log("That is incorrect!")
  }

  console.log("You answered question 1 with ${ca3}."); 
  if (ca3 = a3) {
    console.log("That is correct!")
  }else {
    console.log("That is incorrect!")
  }

  console.log("You answered question 1 with ${ca4}."); 
  if (ca4 = a4) {
    console.log("That is correct!")
  }else {
    console.log("That is incorrect!")
  }
  
  console.log("You answered question 1 with ${ca5}."); 
  if (ca5 = a5) {
    console.log("That is correct!")
  }else {
    console.log("That is incorrect!")
  }

  
  let grade = candidateAnswer / correctAnswer ;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};