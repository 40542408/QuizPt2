const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')



let currentQuestionIndex
let score = 0

nextButton.addEventListener('click', () => {
	currentQuestionIndex++
	setNextQuestion()
})

window.onload = function(){
	startGame();
	
};

function startGame() {
	currentQuestionIndex = 0
	setNextQuestion()
}


function setNextQuestion() {
		resetState()
		showQuestion(questions[currentQuestionIndex])
}

function showQuestion(question) {
	questionElement.innerText = question.question
	//question.answers.forEach( answer => {
		for(var i=0; i < question.answers.length;i++){
			var buttonElement = document.getElementById("btn" + i)
			var imageElement = document.getElementById("img" + i)
			var scoreElement = document.getElementById("score-btn")
			if (question.answers[i].correct) {
				buttonElement.dataset.correct = question.answers[i].correct
			}
			
			buttonElement.addEventListener('click', selectAnswer)
			buttonElement.innerText = question.answers[i].text
			imageElement.src = question.pictures[i].image
			scoreElement.innerText = score
		}
	//})
}

function resetState() {
	nextButton.classList.add('hide')
}

function selectAnswer(e){
	const selectedButton = e.target
	//var q = questions[currentQuestionIndex]
	const correct = selectedButton.dataset.correct
	//for(var i=0; i < q.answers.length;i++){
	//var buttonElement = document.getElementById("btn" + i)
	setStatusClass(selectedButton,selectedButton.dataset.correct)
	//}
	
}

function setStatusClass(element, correct) {
	if(correct) {
		score++	
	}
}


		

const questions = [
	{	
		question: 'Which bird is not native to New Zealand?',
		answers: [
			{ text:'Kiwi', correct: false},
			{ text:'Kookaburra', correct: false},
			{ text:'Bluejay', correct: true},
			{ text:'Kea', correct: false}
		],
		pictures: [
			{ image:'../images/kiwi.jpg'},
			{ image:'../images/Kookaburra.jpg'},
			{ image:'../images/blue-jay.jpg'},
			{ image:'../images/kea.jpg'}
			
			
	]	
	},
	{	
		question: 'Which bird is not native to Africa?',
		answers: [
			{ text:'deer', correct: true},
			{ text:'fox', correct: false},
			{ text:'dog', correct: false},
			{ text:'cat', correct: false}
		],
		pictures: [
			{ image:'../images/blue-jay.jpg'},
			{ image:'../images/Kookaburra.jpg'},
			{ image:'../images/blue-jay.jpg', correct: true},
			{ image:'../images/kea.jpg', correct: false}
			
			
	]	
	},
	{	
		question: 'Which bird is not native to Africa?',
		answers: [
			{ text:'deer', correct: true},
			{ text:'fox', correct: false},
			{ text:'dog', correct: false},
			{ text:'cat', correct: false}
		],
		pictures: [
			{ image:'../images/blue-jay.jpg'},
			{ image:'../images/Kookaburra.jpg'},
			{ image:'../images/blue-jay.jpg', correct: true},
			{ image:'../images/kea.jpg', correct: false}
			
			
	]	
	}

	
]




		
