// राजस्थान LDC परीक्षा के हाई-वेटेज टॉपिक्स पर आधारित 15 महत्वपूर्ण प्रश्न
const questions = [
    // --- TOPIC: विद्युत (Electricity) ---
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
    },
    {
        question: "6. सामान्यतः ट्यूबलाइट में कौन सी गैस भरी होती है?",
        options: ["Argon के साथ Sodium वाष्प", "Neon के साथ Sodium वाष्प", "Argon के साथ Mercury वाष्प", "Neon के साथ Mercury वाष्प"],
        answer: 2
    },
    {
        question: "7. विद्युत हीटर की कुंडली (Coil) बनाने के लिए किस पदार्थ का उपयोग किया जाता है?",
        options: ["नाइक्रोम (Nichrome)", "टंगस्टन", "ताँबा", "लोहा"],
        answer: 0
    },

    // --- TOPIC: स्वास्थ्य एवं पोषण (Health & Nutrition) ---
    {
        question: "8. मानव शरीर में 'रतौंधी' (Night Blindness) रोग किस विटामिन की कमी के कारण होता है?",
        options: ["विटामिन B", "विटामिन A", "विटामिन C", "विटामिन D"],
        answer: 1
    },
    {
        question: "9. 'मरास्मस' (Marasmus) और 'क्वाशियोरकर' रोग भोजन में किसकी गंभीर कमी के कारण होते हैं?",
        options: ["विटामिन", "कार्बोहाइड्रेट", "वसा (Fat)", "प्रोटीन"],
        answer: 3
    },
    {
        question: "10. किस विटामिन को 'एस्कॉर्बिक एसिड' (Ascorbic Acid) भी कहा जाता है, जो खट्टे फलों में पाया जाता है?",
        options: ["विटामिन C", "विटामिन K", "विटामिन E", "विटामिन B12"],
        answer: 0
    },
    {
        question: "11. मानव रक्त का थक्का (Blood Clotting) बनने में कौन सा विटामिन सहायक होता है?",
        options: ["विटामिन A", "विटामिन D", "विटामिन E", "विटामिन K"],
        answer: 3
    },

    // --- TOPIC: आनुवंशिकी (Genetics) ---
    {
        question: "12. आनुवंशिकी के नियम प्रतिपादित करने के लिए ग्रेगर जॉन मेंडल ने किस पौधे पर प्रयोग किए थे?",
        options: ["जंगली मटर", "उद्यान मटर (Garden Pea)", "चना", "सरसों"],
        answer: 1
    },
    {
        question: "13. मानव कोशिकाओं में गुणसूत्रों (Chromosomes) की कुल संख्या कितनी होती है?",
        options: ["23 गुणसूत्र", "46 गुणसूत्र (23 जोड़े)", "48 गुणसूत्र", "44 गुणसूत्र"],
        answer: 1
    },
    {
        question: "14. निम्नलिखित में से किसे 'आनुवंशिकी का जनक' (Father of Genetics) कहा जाता है?",
        options: ["चार्ल्स डार्विन", "लैमार्क", "ग्रेगर जॉन मेंडल", "थॉमस हंट मॉर्गन"],
        answer: 2
    },
    {
        question: "15. डीएनए (DNA) का प्रसिद्ध 'Double Helix Model' (द्वि-कुंडली प्रारूप) किसने दिया था?",
        options: ["वाटसन एवं क्रिक", "मेंडल", "रॉबर्ट हुक", "हरगोविंद खुराना"],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 150; // समय बढ़ाकर 150 सेकंड (2.5 मिनट) कर दिया है
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
    timeLeft = 150;
    resultBox.style.display = 'none';
    quizBox.style.display = 'block';
    startTimer();
    showQuestion();
});
