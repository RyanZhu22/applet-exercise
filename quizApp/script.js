// create a array to import question, option and correct answer 
const quizData = [
    {
        question: "What is the most popular programming language in 2021 around the world?",
        a: 'C',
        b: 'Java',
        c: 'Python',
        d: 'C++',
        correct: 'a',
    },
    {
        question: 'Who is the president of USA in 2021',
        a: 'Biden',
        b: 'Trump',
        C: 'Obama',
        d: 'Bush',
        correct: 'a',
    },
    {   
        question: 'What is the country with the highest GDP per capita? ',
        a: 'Qatar',
        b: 'Macao',
        C: 'Luxembourg',
        d: 'Singapore',
        correct: 'a',
    }   
];

// import all  element which need to change
const questionEl = document.getElementById('question');
const answersEl = document.querySelectorAll('.answer');
const answer_aEl = document.getElementById('answer_a');
const answer_bEl = document.getElementById('answer_b');
const answer_cEl = document.getElementById('answer_c');
const answer_dEl = document.getElementById('answer_d');
const submitEl = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    // The current question
    const currentQuizData = quizData[currentQuiz];
    // import data of the current questiion and answer
    questionEl.innerText = currentQuizData.question;
    answer_aEl.innerText = currentQuizData.a;
    answer_bEl.innerText = currentQuizData.b;
    answer_cEl.innerText = currentQuizData.c;
    answer_dEl.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    // select every answer which is clicked(people select the answer), the optionName(a,b,c,d) is added from id of selected answer  
    answersEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answersEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitEl.addEventListener('click', () => {
    // get answer that is selected
    const answer = getSelected();
    
    // if the answer is selected 
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            let correctRate = (score / quizData.length) * 100;

            alert('You finished and your correct rate is ' + correctRate + '%')
        }
    }
    
});


    