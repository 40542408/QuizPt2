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
		showQuestion(questions[currentQuestionIndex])
}
 
function showQuestion(question) {
	questionElement.innerText = question.question
		for(var i=0; i < question.answers.length;i++){
			var buttonElement = document.getElementById("btn" + i)
			var imageElement = document.getElementById("img" + i)
			var scoreElement = document.getElementById("score-btn")
			buttonElement.innerText = question.answers[i].text
			imageElement.src = question.pictures[i].image
			scoreElement.innerText = score
			if (question.answers[i].correct){
				//buttonElement.dataset.correct = question.answers[i].correct
				var t = question.answers[i].correct
			}
			//buttonElement.addEventListener('click', selectAnswer)
		
			//buttonElement.dataset.correct = question.answers[i].correct
			buttonElement.addEventListener("click", event => {
				if (t) {
				  	score ++;
				}
			  });
		}
			
	}

function selectAnswer(e){
	var selectedButton = e.target
	var correct = selectedButton.dataset.correct
	if(correct){
		score ++
		selectedButton.dataset.correct = null
	}

}

 
const questions = [
	{	
		question: ' Question 1: Which bird is not native to New Zealand?',
		answers: [
			{ text:'A: Kiwi', correct: false},
			{ text:'B: Kookaburra', correct: false},
			{ text:'C: Bluejay', correct: true},
			{ text:'D: Kea', correct: false}
		],
		pictures: [
			{ image:'../images/kiwi.jpg'},
			{ image:'../images/kookaburra.jpg'},
			{ image:'../images/blue-jay.jpg'},
			{ image:'../images/kea.jpg'}		
	]	
	},
	{	
		question: 'Question 2: What is the capital of New Zealand?',
		answers: [
			{ text:'A: Auckland', correct: false},
			{ text:'B: Wellington', correct: true},
			{ text:'C: Christchurch', correct: false},
			{ text:'D: Brisbane', correct: false}
		],
		pictures: [
			{ image:'../images/auckland.jpg'},
			{ image:'../images/wellington.jpg'},
			{ image:'../images/christchurch.jpg'},
			{ image:'../images/brisbane.jpg'}		
	]	
	},
	{	
		question: 'Question 3: What is an offical language of New Zealand?',
		answers: [
			{ text:'A: French', correct: false},
			{ text:'B: Maori', correct: true},
			{ text:'C: Bislama', correct: false},
			{ text:'D: Mandarin', correct: false}
		],
		pictures: [
			{ image:'../images/french-flag.jpg'},
			{ image:'../images/maori-flag.png'},
			{ image:'../images/vanatu-flag.jpg'},
			{ image:'../images/chinese-flag.jpg'}		
	]	
	},
	{	
		question: 'Question 4: Which volacano is located in New Zealand?',
		answers: [
			{ text:'A: Mount Fujiyama', correct: false},
			{ text:'B: Mount St Helens', correct: false},
			{ text:'C: Mount Taranaki', correct: true},
			{ text:'D: Mount Cook', correct: false}
		],
		pictures: [
			{ image:'../images/mt-fujiyama.jpg'},
			{ image:'../images/mt-st-helens.jpg'},
			{ image:'../images/mt-taranaki.jpg'},
			{ image:'../images/mt-cook.jpg'}		
	]	
	},
	{	
		question: 'Question 5: Which land mammal is native to New Zealand?',
		answers: [
			{ text:'A: Dingo', correct: false},
			{ text:'B: Red Deer', correct: false},
			{ text:'C: Wild Boar', correct: false},
			{ text:'D: Long-tailed Bat', correct: true}
		],
		pictures: [
			{ image:'../images/dingo.jpg'},
			{ image:'../images/red-deer.jpg'},
			{ image:'../images/wild-boar.jpg'},
			{ image:'../images/long-tailed-bat.jpg'}		
	]	
	},
	{	
		question: 'Question 6: How many stars are on the New Zealand flag?',
		answers: [
			{ text:'A: Four', correct: true},
			{ text:'B: Five', correct: false},
			{ text:'C: Six', correct: false},
			{ text:'D: Seven', correct: false}
		],
		pictures: [
			{ image:'../images/four.png'},
			{ image:'../images/five.png'},
			{ image:'../images/six.jpg'},
			{ image:'../images/seven.png'}		
	]	
	},	
	{	
		question: 'Question 7: Which sea borders New Zealand?',
		answers: [
			{ text:'A: Solomon Sea', correct: false},
			{ text:'B: Adriatic Sea', correct: false},
			{ text:'C: Tasman Sea', correct: true},
			{ text:'D: Caribbean Sea', correct: false}
		],
		pictures: [
			{ image:'../images/solomon.png'},
			{ image:'../images/adriatic.png'},
			{ image:'../images/tasman.jpg'},
			{ image:'../images/caribbean.png'}		
	]	
	},	
	{	
		question: 'Question 8: Who is New Zealands current PM?',
		answers: [
			{ text:'A: John Key', correct: false},
			{ text:'B: Jacinda Ohearn', correct: true},
			{ text:'C: Scott Morrison', correct: false},
			{ text:'D: Theresa May', correct: false}
		],
		pictures: [
			{ image:'../images/john.jpg'},
			{ image:'../images/jacinda.jpg'},
			{ image:'../images/scott.jpg'},
			{ image:'../images/theresa.jpg'}		
	]	
	},	
	{	
		question: 'Question 9: Which popular movie franchise was filmed in New Zealand?',
		answers: [
			{ text:'A: Planet of the Apes', correct: false},
			{ text:'B: Harry Potter', correct: false},
			{ text:'C: Star Trek', correct: false},
			{ text:'D: Lord of the Rings', correct: true}
		],
		pictures: [
			{ image:'../images/pota.jpg'},
			{ image:'../images/hp.jpg'},
			{ image:'../images/st.jpg'},
			{ image:'../images/lotr.jpg'}		
	]	
	},
	{	
		question: 'Question 10: What is the approximate sheep population of New Zealand ?',
		answers: [
			{ text:'A: 10 million', correct: false},
			{ text:'B: 25 million', correct: true},
			{ text:'C: 35 million', correct: false},
			{ text:'D: 70 million', correct: false}
		],
		pictures: [
			{ image:'../images/10.jpg'},
			{ image:'../images/25.jpg'},
			{ image:'../images/35.jpg'},
			{ image:'../images/70.jpg'}		
	]	
	},		
]
