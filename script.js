var currentQuestion = 0;
var score = 0;

var questions = [
    {
        question: "What is the capital of France?",
        options: {
            A: "London",
            B: "Berlin",
            C: "Paris"
        },
        correctAnswer: "C"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: {
            A: "Venus",
            B: "Mars",
            C: "Jupiter"
        },
        correctAnswer: "B"
    },
    {
        question: "Who wrote the play Romeo and Juliet?",
        options: {
            A: "William Shakespeare",
            B: "Charles Dickens",
            C: "Jane Austen"
        },
        correctAnswer: "A"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: {
            A: "Atlantic Ocean",
            B: "Indian Ocean",
            C: "Pacific Ocean"
        },
        correctAnswer: "C"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: {
            A: "China",
            B: "Japan",
            C: "South Korea"
        },
        correctAnswer: "B"
    },
    {
        question: "Who was the first President of the United States?",
        options: {
            A: "Abraham Lincoln",
            B: "George Washington",
            C: "Thomas Jefferson"
        },
        correctAnswer: "B"
    }
];

function loadQuestion() {
    var questionText = document.getElementById("question-text");
    var labelA = document.getElementById("labelA");
    var labelB = document.getElementById("labelB");
    var labelC = document.getElementById("labelC");

    // Reset the radio buttons
    document.querySelectorAll('input[name="answer"]').forEach(input => input.checked = false);

    questionText.textContent = questions[currentQuestion].question;
    labelA.textContent = questions[currentQuestion].options.A;
    labelB.textContent = questions[currentQuestion].options.B;
    labelC.textContent = questions[currentQuestion].options.C;
}

function nextQuestion() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');

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
        document.getElementById("next-button").style.display = "none"; // Hide the Next button
    }
}

function displayResult() {
    var resultMessage = document.getElementById("result-message");
    resultMessage.textContent = "You have answered correctly in " + score + " questions out of " + questions.length + ".";
}

loadQuestion();
