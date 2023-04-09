var startQuizEl = document.querySelector(".start-quiz"); //.start-quiz is class #start-quiz is id
var welcomeScreenEl = document.querySelector(".welcome-screen");
var questionScreenEL = document.querySelector(".question-screen");

var questionIndex = 0;


const questions = [
    {
        question: 'What does HTML stand for?',
        optionA: 'asda',
        optionB: 'asda',
        optionC: 'asda',
        optionD: 'asda',
    },
    {
        question: 'What does HTML stand for?',
        optionA: 'asda',
        optionB: 'asda',
        optionC: 'asda',
        optionD: 'asda',
    },
    {
        question: 'What does HTML stand for?',
        optionA: 'asda',
        optionB: 'asda',
        optionC: 'asda',
        optionD: 'asda',
    },
    {
        question: 'What does HTML stand for?',
        optionA: 'asda',
        optionB: 'asda',
        optionC: 'asda',
        optionD: 'asda',
    },
    {
        question: 'What does HTML stand for?',
        optionA: 'asda',
        optionB: 'asda',
        optionC: 'asda',
        optionD: 'asda',
    }
]

function startQuiz() { //created a function that starts the quiz
    console.log(1) //this was to check if the function was working
    welcomeScreenEl.classList.add('hide') //evrything on that class list will add the hide on css
    questionScreenEL.classList.remove('hide')
}


startQuizEl.addEventListener('click', startQuiz) //var will have an event listener for the click and will call function created to hide


