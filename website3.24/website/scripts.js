

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
    let answered = false;  // 新增变量，检查是否已经回答

    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const nextButton = document.getElementById("next-btn");
    const feedbackText = document.getElementById("feedback");

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.text;
        optionsContainer.innerHTML = "";// 清空之前的选项
        answered = false; // 每次加载新问题时重置

        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option.label;
            button.addEventListener("click", function(){
                if (!answered) {  // 只有在未回答的情况下才能点击
                    answered = true;  // 标记为已回答
                    checkAnswer(option.value, currentQuestion.correct);
                }
            } );
            
            optionsContainer.appendChild(button);
        });

        feedbackText.textContent = "";
        nextButton.style.display = "none";
    }

    function checkAnswer(selected, correct) {
         const buttons = optionsContainer.querySelectorAll("button");
        buttons.forEach(button => {
            button.disabled = true; // 一旦回答，禁用所有选项
        });
        if (selected === correct) {
            feedbackText.textContent = "✅ Correct!";
            feedbackText.style.color = "rgb(22, 88, 22)";
            score++;
        } else {
            feedbackText.textContent = "❌ Wrong!";
            feedbackText.style.color = "rgb(214, 66, 66)";
        }
        nextButton.style.display = "block";
    }
    function saveResult() {
        let results = JSON.parse(localStorage.getItem("quizResults")) || [];
        let existingResultIndex = results.findIndex(result => result.quizName === currentQuizName);

        if (existingResultIndex !== -1) {
            // 如果当前测验已存在，则更新分数
            results[existingResultIndex] = { quizName: currentQuizName, score, total: questions.length };
        }else {
        results.push({ quizName: currentQuizName, score, total: questions.length });
        }
        localStorage.setItem("quizResults", JSON.stringify(results));
    }
        nextButton.addEventListener("click", () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
                feedback.textContent = ""; // 清除上一个问题的反馈信息
            } else {


            localStorage.setItem("quizScore", score);
            localStorage.setItem("totalQuestions", questions.length);

            window.location.href = "result.html";
                questionText.textContent = `Quiz Completed! 🎉 Your score: ${score}/${questions.length}`;
            optionsContainer.innerHTML = "";
            nextButton.style.display = "none";

            // 保存结果
            saveResult();
        }
    });
        loadQuestion();
    
    
});
