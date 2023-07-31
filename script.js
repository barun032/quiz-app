const questions = [
    {
        question: "Which is the largest animal in the world?",
        answer: [
            { text: "Elephant", correct: false },
            { text: "Jeraffe", correct: false },
            { text: "Shark", correct: true },
            { text: "Horse", correct: false }
        ]
    },
    {
        question: "Which is the largest contry in the world?",
        answer: [
            { text: "India", correct: false },
            { text: "China", correct: false },
            { text: "Russia", correct: true },
            { text: "America", correct: false }
        ]
    },

    {
        question: "Which is the largest Grass in the world?",
        answer: [
            { text: "Bamboos Grass", correct: true },
            { text: "Dhaman Grass", correct: false },
            { text: "Congress Grass", correct: false },
            { text: "Broadleaf Grass", correct: false }
        ]
    }];

let questionElm = document.getElementById('question');
let answerList = document.getElementById('ans-list');
let nextButton = document.getElementById('next');

let currentQusIndex = 0;
let score = 0;

function startQuiz() {
    currentQusIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions() {
    resetState();
    let currentQuestin = questions[currentQusIndex];
    let questionNo = currentQusIndex + 1;
    questionElm.innerHTML = questionNo + ". " + currentQuestin.question;

    currentQuestin.answer.forEach(answer => {
        let ansElm = document.createElement('p');
        ansElm.innerHTML = answer.text;
        ansElm.classList.add('ans');
        answerList.appendChild(ansElm);

        if (answer.correct) {
            ansElm.dataset.correct = answer.correct;
        }

        ansElm.addEventListener('click', getAnswer);
    });
}
function resetState() {
    nextButton.style.display = "none";
    while (answerList.firstChild) {
        answerList.removeChild(answerList.firstChild);
    }
}

function getAnswer(e) {
    let selectedAnswer = e.target;
    let isCorrect = selectedAnswer.dataset.correct === "true";

    if (isCorrect) {
        selectedAnswer.classList.add('correct');
        score++;
    }
    else {
        selectedAnswer.classList.add('inCorrect');
    }

    Array.from(answerList.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.classList.add('not-clickable');
    });
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQusIndex++;
    if (currentQusIndex < questions.length) {
        showQuestions();
    }
    else {
        showScore();
    }
}


function showScore() {
    resetState();
    questionElm.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    if (currentQusIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
});

startQuiz();
