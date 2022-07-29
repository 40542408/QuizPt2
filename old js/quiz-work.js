const startButton = document.getElementById('start-btn')
//const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
//const nextButton = document.getElementById('next-btn')

let currentQuestionIndex
let score = 0

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
			{ image:'../images/kookaburra.jpg'},
			{ image:'../images/blue-jay.jpg'},
			{ image:'../images/kea.jpg'}		
	]	
	},
	{	
		question: 'What is the capital of New Zealand?',
		answers: [
			{ text:'Auckland', correct: false},
			{ text:'Wellington', correct: true},
			{ text:'Christchurch', correct: false},
			{ text:'Brisbane', correct: false}
		],
		pictures: [
			{ image:'../images/auckland.jpg'},
			{ image:'../images/wellington.jpg'},
			{ image:'../images/christchurch.jpg'},
			{ image:'../images/brisbane.jpg'}		
	]	
	},
	{	
		question: 'What is an offical language of New Zealand?',
		answers: [
			{ text:'French', correct: false},
			{ text:'Maori', correct: true},
			{ text:'Bislama', correct: false},
			{ text:'Mandarin', correct: false}
		],
		pictures: [
			{ image:'../images/french-flag.jpg'},
			{ image:'../images/maori-flag.png'},
			{ image:'../images/vanatu-flag.jpg'},
			{ image:'../images/chinese-flag.jpg'}		
	]	
	},
	{	
		question: 'Which volacano is located in New Zealand?',
		answers: [
			{ text:'Mount Fujiyama', correct: false},
			{ text:'Mount St Helens', correct: false},
			{ text:'Mount Taranaki', correct: true},
			{ text:'Mount Cook', correct: false}
		],
		pictures: [
			{ image:'../images/mt-fujiyama.jpg'},
			{ image:'../images/mt-st-helens.jpg'},
			{ image:'../images/mt-taranaki.jpg'},
			{ image:'../images/mt-cook.jpg'}		
	]	
	},
	{	
		question: 'Which land mammal is native to New Zealand?',
		answers: [
			{ text:'Dingo', correct: false},
			{ text:'Red Deer', correct: false},
			{ text:'Wild Boar', correct: true},
			{ text:'Long-tailed Bat', correct: false}
		],
		pictures: [
			{ image:'../images/dingo.jpg'},
			{ image:'../images/red-deer.jpg'},
			{ image:'../images/wild-boar.jpg'},
			{ image:'../images/long-tailed-bat.jpg'}		
	]	
	}	
]

//nextButton.addEventListener('click', () => {
	//currentQuestionIndex++
	//setNextQuestion()
//})
window.onload = function(){
	startGame();
	
};

function startGame() {
	setNextQuestion()
}

answerButtonsElement.addEventListener('click', () => {
	currentQuestionIndex++
	setNextQuestion()
})


function setNextQuestion() {
		//resetState()
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
				buttonElement = question.answers[i].correct
			}
			
			buttonElement.innerText = question.answers[i].text
			imageElement.src = question.pictures[i].image
			scoreElement.innerText = score
		}
	
		answerButtonsElement.addEventListener('click', selectAnswer)
		
	}


//function resetState() {
	//answerButtonsElement.classList.add('hide')
//}

function selectAnswer(e){
	const selectedButton = e.target
	correct = selectedButton.dataset.correct
	if (correct) {
		score++
	}
	
	

	//for(var i=0; i < q.answers.length;i++){
	//var buttonElement = document.getElementById("btn" + i)
	//setStatusClass(selectedButton,selectedButton.dataset.correct)
	//}
}

//function setStatusClass(element, correct) {
	//clearStatusClass(element)
//}
//}

//function clearStatusClass(element){
	//element.classList.remove('correct')
	//element.classList.remove('wrong')
//}





		
