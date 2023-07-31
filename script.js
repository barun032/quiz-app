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
            { text: "Congress Grass", correct: true },
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
    let currentQuestin = questions[currentQusIndex];
    let questionNo = currentQusIndex + 1;
    questionElm.innerHTML = questionNo + ". " + currentQuestin.question;

    currentQuestin.answer.forEach(answer => {
        let ansElm = document.createElement('p');
        ansElm.innerHTML = answer.text;
        ansElm.classList.add('ans');
        answerList.appendChild(ansElm);
    })
}

showQuestions();
