const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the color of the sky?", answer: "Blue" }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').innerText = questions[currentQuestionIndex].question;
    } else {
        document.getElementById('question-container').innerHTML = "<p>Quiz Completed!</p>";
    }
}

function submitAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('feedback').innerText = "Correct!";
        document.getElementById('feedback').style.color = "green";
    } else {
        document.getElementById('feedback').innerText = `Incorrect. The correct answer is ${correctAnswer}.`;
        document.getElementById('feedback').style.color = "red";
    }

    currentQuestionIndex++;
    document.getElementById('answer').value = "";
    setTimeout(loadQuestion, 2000);
}

window.onload = loadQuestion;
