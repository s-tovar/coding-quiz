var startQuizEl = document.querySelector(".start-quiz"); //.start-quiz is class #start-quiz is id
var welcomeScreenEl = document.querySelector(".welcome-screen");
var questionScreenEL = document.querySelector(".question-screen");

var timeLeft = 75;

//Timer
function startTimer() {
    var countDownEl = document.getElementById("countdown");
    var countdownTimer = setInterval(function () {
        timeLeft--;
        countDownEl.innerHTML = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            alert("Time's up!!");
        }
    }, 1000);
}


var questionIndex = 0;

const questions = [
    {
        question: 'Commonly used data types DO Not Incldue:?',
        optionA: '1. strings',
        optionB: '2. booleans',
        optionC: '3. alerts',
        optionD: '4. numbers',
        correct: '3. alerts',
    },
    {
        question: 'The condition in an if / else statement is enclosed with ___?',
        optionA: '1. quotes',
        optionB: '2. curly brackets',
        optionC: '3. parenthesis',
        optionD: '4. square brackets',
        correct: '2. curly brackets',
    },
    {
        question: 'Arrays in JavaScript can be used to store ___.',
        optionA: '1. numbers and strings',
        optionB: '2. other arrays',
        optionC: '3. booleans',
        optionD: '4. all of the above',
        correct: '4. all of the above',
    },
    {
        question: 'String values must be enclosed within ____ when being assigned to variable.',
        optionA: '1. commas',
        optionB: '2. curly brackets',
        optionC: '3. quotes',
        optionD: '4. parenthesis',
        correct: '3. quotes',
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        optionA: '1. JavaScript',
        optionB: '2. terminal/bash',
        optionC: '3. for loops',
        optionD: '4. console.log',
        correct: '4. console.log',
    }
]

var questionEl = document.getElementById("question");
var optionAEl = document.getElementById("optionA");
var optionBEl = document.getElementById("optionB");
var optionCEl = document.getElementById("optionC");
var optionDEl = document.getElementById("optionD");

function startQuiz() { //created a function that starts the quiz
    console.log(1) //this was to check if the function was working
    welcomeScreenEl.classList.add('hide') //evrything on that class list will add the hide on css
    questionScreenEL.classList.remove('hide')
    startTimer()
    displayNextQuestion()

}

function displayNextQuestion() {
    var currentQuestion = questions[questionIndex]
    if(!currentQuestion){
        //the quiz is over do not display a question
    }

    questionEl.textContent = currentQuestion.question;
    optionAEl.textContent = currentQuestion.optionA;
    optionBEl.textContent = currentQuestion.optionB;
    optionCEl.textContent = currentQuestion.optionC;
    optionDEl.textContent = currentQuestion.optionD;
}

function checkAnswer(event) {
    console.log(event.target.textContent)
    if (event.target.textContent === questions[questionIndex].correct) {
        console.log("correct")
        event.target.style.backgroundColor = "green"
    } else {
        console.log("incorrect");
        timeLeft -= 10
        event.target.style.backgroundColor = "red"
    }
    setTimeout(function(){
        event.target.style.backgroundColor = ""
        questionIndex++
        displayNextQuestion()
    },2000)
}
//function 

startQuizEl.addEventListener('click', startQuiz) //var will have an event listener for the click and will call function created to hide
optionAEl.addEventListener('click', checkAnswer)
optionBEl.addEventListener('click', checkAnswer)
optionCEl.addEventListener('click', checkAnswer)
optionDEl.addEventListener('click', checkAnswer)

