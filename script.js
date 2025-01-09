//  step-1: define quiz data

const quizData = [
    {
        question: "Which HTML element is used to define the largest heading?",
        options: [
            "<h6>",
            "<h3>",
            "<h1>",
            "<p>",
           
        ],
        correct: 2,
    },
    {
        question: "What is the correct way to add a background color in CSS?",
        options: [
            "color: blue;",
            "background-color: blue;",
            "bg-color: blue;",
            "background: blue;",
            
        ],
        correct: 1,
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: [
            "class",
            "font",
            "styles",
            "style",
            
        ],
        correct: 3,
    },
    {
        question: "Which HTML element is used to create a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<nav>",
            
            
        ],
        correct: 1,
    },
    {
        question: "Which of the following is a front-end framework?",
        options: [
            "Django",
            "React",
            "Node.js",
            "Flask",
            
        ],
        correct: 1,
    },
]

// step-2: initializing javascript

const quiz = document.querySelector("#quiz");
const answerElm = document.querySelectorAll(".answer");
const[questionElm, option_1, option_2, option_3, option_4] =
 document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4"
);
const submitElm = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

// step-3: load quiz function


const loadQuiz = () => {
    const {question, options } = quizData[currentQuiz];
    console.log(question);

    questionElm.innerText = `${currentQuiz + 1 }: ${question}`
    // options.forEach((curOption, index) => (option_1.innerText = curOption));

    options.forEach(
        (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
    );
};

loadQuiz();

// step-4: get selected answer function on button click

const getSelectedOption = () => {
    // let ans_index;
    // answerElm.forEach((curOption, index) =>{
    //     if ( curOption.checked) {
    //         ans_index = index;
    //     }
    // });
    // return ans_index;

    let answerElement = Array.from(answerElm);
     return answerElement.findIndex((curElem, index) => curElem.checked);
};

const deselectedAnswers = () => {
    answerElm.forEach((curElem) => curElem.checked = false)
}

submitElm.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if(selectedOptionIndex === quizData[currentQuiz].correct) {
        score = score + 1;
    }

    currentQuiz++;

    if(currentQuiz < quizData.length) {
        deselectedAnswers();
        loadQuiz();
    }
  else{
        quiz.innerHTML = `
        <div class="result" style="text-align: center;   height: 60vh;
    width: 45vw; padding-right: 40px; display: flex;  center; justify-content: center; align-items: center; flex-direction: column;   padding: 20px; gap: 20px;">
            <h2 style="color:rgb(0, 0, 0); font-size: 30px; font-family: sans-serif;"> Your Score: ${score}/${quizData.length} Correct Answer</h2>
            <p style="font-size: 20px; color: black;">Congratulations on completing the quiz </p>
            <button  style="background-color: #BDE0FE; color: black; padding: 10px 20px; border: none; border-radius: 30px; cursor: pointer;" class="reload-button" onclick= "location.reload()">Play Again</button>
        </div>
        `;
    }   
});

