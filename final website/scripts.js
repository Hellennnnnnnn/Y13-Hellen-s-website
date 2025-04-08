document.addEventListener("DOMContentLoaded", function () {

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
    let answered = false;  // Add a new variable and check if it has been answered

    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const nextButton = document.getElementById("next-btn");
    const feedbackText = document.getElementById("feedback");

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.text;
        optionsContainer.innerHTML = "";// Clear previous options
        answered = false; // Reset every time a new issue is loaded

        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option.label;
            button.addEventListener("click", function(){
                if (!answered) {  // Only click if there is no answer
                    answered = true;  // Mark as answered
                    checkAnswer(option.value, currentQuestion.correct);
                }
            });
            
            optionsContainer.appendChild(button);
        });

        feedbackText.textContent = "";
        nextButton.style.display = "none";
    }

    function checkAnswer(selected, correct) {
        const buttons = optionsContainer.querySelectorAll("button");
        buttons.forEach(button => {
        button.disabled = true; // Once answered, disable all options
        });
        if (selected === correct) {
            feedbackText.textContent = "✅ Correct!";
            feedbackText.style.color = "rgb(22, 88, 22)";
            score++;
        } 
        else {
            feedbackText.textContent = "❌ Wrong!";
            feedbackText.style.color = "rgb(214, 66, 66)";
        }
        nextButton.style.display = "block";
    }
    function saveResult() {
        let results = JSON.parse(localStorage.getItem("quizResults")) || [];
        let existingResultIndex = results.findIndex(result => result.quizName === currentQuizName);

        if (existingResultIndex !== -1) {
            // If the current test already exists, update the score
            results[existingResultIndex] = { quizName: currentQuizName, score, total: questions.length };
        }
        else {
            results.push({ quizName: currentQuizName, score, total: questions.length });
        }
        localStorage.setItem("quizResults", JSON.stringify(results));
    }
        nextButton.addEventListener("click", () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
                feedback.textContent = ""; // Once answered, disable all options
            } 
            else {


                localStorage.setItem("quizScore", score);
                localStorage.setItem("totalQuestions", questions.length);

                window.location.href = "result.html";
                    questionText.textContent = `Quiz Completed! 🎉 Your score: ${score}/${questions.length}`;
                optionsContainer.innerHTML = "";
                nextButton.style.display = "none";

                // Save the Results
                saveResult();
            }
        });

        loadQuestion(); 
});
