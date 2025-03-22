document.addEventListener("DOMContentLoaded", function () {
    console.log("scripts.js loaded!");

    const menuToggle = document.getElementById("menu-toggle");
    const settingsPanel = document.getElementById("settings-panel");
    const closeSettings = document.getElementById("close-settings");

    menuToggle.addEventListener("click", function () {
        settingsPanel.classList.toggle("open");
    });

    closeSettings.addEventListener("click", function () {
        settingsPanel.classList.remove("open");
    });

    if (!questions || questions.length === 0) {
        console.error("Error: No questions loaded!");
        document.getElementById("question-text").textContent = "Failed to load questions.";
        return;
    }

    let currentQuestionIndex = 0;
    let score = 0;

    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const nextButton = document.getElementById("next-btn");
    const feedbackText = document.getElementById("feedback");

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.text;
        optionsContainer.innerHTML = "";

        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option.label;
            button.addEventListener("click", () => checkAnswer(option.value, currentQuestion.correct));
            optionsContainer.appendChild(button);
        });

        feedbackText.textContent = "";
        nextButton.style.display = "none";
    }

    function checkAnswer(selected, correct) {
        if (selected === correct) {
            feedbackText.textContent = "✅ Correct!";
            feedbackText.style.color = "green";
            score++;
        } else {
            feedbackText.textContent = "❌ Wrong!";
            feedbackText.style.color = "red";
        }
        nextButton.style.display = "block";
    }

    nextButton.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            questionText.textContent = `Quiz Completed! 🎉 Your score: ${score}/${questions.length}`;
            optionsContainer.innerHTML = "";
            nextButton.style.display = "none";
        }
    });

    loadQuestion();
});
