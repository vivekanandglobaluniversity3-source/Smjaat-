const questions = [
    {
        question: "1. एक 100 W का विद्युत बल्ब प्रति दिन 10 घंटे उपयोग किया जाता है। 30 दिन के एक महीने में इसके द्वारा खर्च की गई विद्युत ऊर्जा 'यूनिट' में क्या होगी?",
        options: ["300 यूनिट", "30 यूनिट", "3 यूनिट", "15 यूनिट"],
        answer: 1
    },
    {
        question: "2. ओम के नियम (Ohm's Law) का सही गणितीय रूप क्या है?",
        options: ["V = I / R", "R = V × I", "V = I × R", "I = V × R"],
        answer: 2
    },
    {
        question: "3. घरों में विद्युत सुरक्षा के लिए लगाए जाने वाले फ्यूज तार (Fuse Wire) की क्या विशेषता होनी चाहिए?",
        options: ["निम्न प्रतिरोध, उच्च गलनांक", "उच्च प्रतिरोध, निम्न गलनांक", "निम्न प्रतिरोध, निम्न गलनांक", "उच्च प्रतिरोध, उच्च गलनांक"],
        answer: 1
    },
    {
        question: "4. विद्युत आवेश (Electric Charge) का अंतर्राष्ट्रीय मात्रक (SI Unit) क्या है?",
        options: ["एम्पीयर", "वोल्ट", "कूलाम (Coulomb)", "वाट"],
        answer: 2
    },
    {
        question: "5. शार्ट सर्किट (लघुपथन) के समय परिपथ में अत्यधिक विद्युत धारा का मान:",
        options: ["बहुत कम हो जाता है", "अत्यधिक बढ़ जाता है", "अपरिवर्तित रहता है", "शून्य हो जाता है"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 50;
let timerInterval;

const startBox = document.getElementById('start-box');
const quizBox = document.getElementById('quiz-box');
const resultBox = document.getElementById('result-box');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const timerEl = document.getElementById('timer');
const progressBar = document.getElementById('progress-bar');
const questionCounter = document.getElementById('question-counter');
const scoreText = document.getElementById('score-text');
const percentageEl = document.getElementById('percentage');

startBtn.addEventListener('click', () => {
    startBox.style.display = 'none';
    quizBox.style.display = 'block';
    startTimer();
    showQuestion();
});

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResult();
        } else {
            timeLeft--;
            timerEl.innerText = `समय शेष: ${timeLeft}s`;
        }
    }, 1000);
}

function showQuestion() {
    nextBtn.style.display = 'none';
    optionsContainer.innerHTML = '';
    
    let currentQuestion = questions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;
    questionCounter.innerText = `प्रश्न ${currentQuestionIndex + 1} of ${questions.length}`;
    
    let progress = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectOption(button, index));
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedBtn, index) {
    let correctAnswerIndex = questions[currentQuestionIndex].answer;
    let allButtons = optionsContainer.querySelectorAll('.option-btn');
    
    allButtons.forEach(btn => btn.disabled = true);

    if (index === correctAnswerIndex) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('wrong');
        allButtons[correctAnswerIndex].classList.add('correct');
    }
    
    nextBtn.style.display = 'block';
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        clearInterval(timerInterval);
        progressBar.style.width = '100%';
        showResult();
    }
});

function showResult() {
    quizBox.style.display = 'none';
    resultBox.style.display = 'block';
    scoreText.innerText = `आपने ${questions.length} में से ${score} सही किए।`;
    let percent = Math.round((score / questions.length) * 100);
    percentageEl.innerText = `${percent}%`;
}

restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 50;
    resultBox.style.display = 'none';
    quizBox.style.display = 'block';
    startTimer();
    showQuestion();
});
