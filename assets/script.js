// DOM Variable Setting
var highscoreBTN = document.querySelector(".high-score-btn");
var mainBodyEl = document.querySelector(".main-body");
var goBtn = document.querySelector(".go-btn");

// const mainBodyConst = mainBodyEl;

// Switch to Quiz

// var startQuiz = function() {
//     var questionEl = document.querySelector(".quiz-header");
//     questionEl.textContent = "Question";
// }

// goBtn.addEventListener("click", function(){
    
// });

// Question Html change

var quizHeaderEl = document.querySelector(".quiz-header");
quizHeaderEl.textContent = "Question";

var answersEl = document.querySelector("information1");

var answer1El = document.createElement("ui");
answer1El.innerHTML = "<li><button>" + "1" + "</button>" + "answer 1" + "<li>";
answersEl.appendChild(answer1El);
