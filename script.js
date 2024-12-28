let currentQuestion = 0;
let score = 0;

const questions = [
    {
        question: "What is the capital of France?",
        options: { A: "London", B: "Berlin", C: "Paris" },
        correctAnswer: "C",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: { A: "Venus", B: "Mars", C: "Jupiter" },
        correctAnswer: "B",
    },
    {
        question: "Who wrote the play Romeo and Juliet?",
        options: { A: "William Shakespeare", B: "Charles Dickens", C: "Jane Austen" },
        correctAnswer: "A",
    },
    {
        question: "What is the largest ocean on Earth?",
        options: { A: "Atlantic Ocean", B: "Indian Ocean", C: "Pacific Ocean" },
        correctAnswer: "C",
    },
];

function loadQuestion() {
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");

    // Reset the options container
    optionsContainer.innerHTML = "";

    // Set the question text
    questionText.textContent = questions[currentQuestion].question;

    // Create options dynamically
    const options = questions[currentQuestion].options;
    for (const key in options) {
        const optionDiv = document.createElement("div");
        optionDiv.className = "option";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.id = `option${key}`;
        input.value = key;

        const label = document.createElement("label");
        label.htmlFor = `option${key}`;
        label.textContent = options[key];

        optionDiv.appendChild(input);
        optionDiv.appendChild(label);
        optionsContainer.appendChild(optionDiv);
    }
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        alert("Please choose one of the options");
        return;
    }

    if (selectedOption.value === questions[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
        <h1>Quiz Completed!</h1>
        <p id="result-message">You answered ${score} out of ${questions.length} questions correctly.</p>
    `;
}

loadQuestion();
