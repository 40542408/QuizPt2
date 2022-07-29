
var images = {

"kea": "../images/kea.jpg",
"kiwi": "../images/kiwi.jpg",
"kookaburra": "../images/kookaburra.jpg",
"blue-jay": "../images/blue-jay.jpg"
}

 

function populate() {
if (quiz.isEnded()) {
showScores();
} else {
// show question
var element = document.getElementById("question");
element.innerHTML = quiz.getQuestionIndex().text;

// show options
var choices = quiz.getQuestionIndex().choices;
for (var i = 0; i < choices.length; i++) {
var element = document.getElementById("choice" + i);
element.innerHTML = images[choices[i]]? '<img src="'+images[choices[i]]+'"/>':choices[i];
guess("btn" + i, choices[i]);
}

};





// create questions
var questions = [
new Question("Which bird is not native to New Zealand?", ["kea", "kiwi", "blue-jay", "kookaburra"], "blue-jay"),
];

function Question(text, choices, answer) {
this.text = text;
this.choices = choices;
this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
return this.answer === choice;
}


function Quiz(questions) {
this.score = 0;
this.questions = questions;
this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
if (this.getQuestionIndex().isCorrectAnswer(answer)) {
this.score++;
}

this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
return this.questionIndex === this.questions.length;
}

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();











