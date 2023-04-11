var startQuizEl = document.querySelector(".start-quiz"); //.start-quiz is class #start-quiz is id
var welcomeScreenEl = document.querySelector(".welcome-screen");
var questionScreenEL = document.querySelector(".question-screen");


//Timer
var timeLeft = 75;
var countDownEl = document.getElementById("countdown");
var countdownTimer = setInterval(function() {
    timeLeft--;
    countDownEl.innerHTML = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        alert("Time's up!!");
    }
}, 1000);


var questionIndex = 0;

const questions = [
    {
        question: 'Commonly used data types DO Not Incldue:?',
        optionA: '1. strings',
        optionB: '2. booleans',
        optionC: '3. alerts',
        optionD: '4. numbers',
    },
    {
        question: 'The condition in an if / else statement is enclosed with ___?',
        optionA: '1. quotes',
        optionB: '2. curly brackets',
        optionC: '3. parenthesis',
        optionD: '4. square brackets',
    },
    {
        question: 'Arrays in JavaScript can be used ot store ___.',
        optionA: '1. numbers and strings',
        optionB: '2. other arrays',
        optionC: '3. booleans',
        optionD: '4. all of the above',
    },
    {
        question: 'String values must be enclosed within ____ when being assigned to variable.',
        optionA: '1. commas',
        optionB: '2. curly brackets',
        optionC: '3. quotes',
        optionD: '4. parenthesis',
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        optionA: '1. JavaScript',
        optionB: '2. terminal/bash',
        optionC: '3. for loops',
        optionD: '4. console.log',
    }
]

function startQuiz() { //created a function that starts the quiz
    console.log(1) //this was to check if the function was working
    welcomeScreenEl.classList.add('hide') //evrything on that class list will add the hide on css
    questionScreenEL.classList.remove('hide')
}

//function 

startQuizEl.addEventListener('click', startQuiz) //var will have an event listener for the click and will call function created to hide


