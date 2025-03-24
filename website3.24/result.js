document.addEventListener("DOMContentLoaded", function () {
    let results = JSON.parse(localStorage.getItem("quizResults")) || [];

    if (results.length === 0) {
        document.getElementById("score-text").textContent = "No quiz results available.";
        return;
    }

    // 预定义固定顺序（左：Quiz 1，中：Quiz 2，右：Quiz 3）
    const fixedOrder = ["Quiz 1", "Quiz 2", "Quiz 3"];
    let latestResults = { "Quiz 1": null, "Quiz 2": null, "Quiz 3": null };

    // 按照固定顺序填充数据（最新数据覆盖旧数据）
    results.forEach(result => {
        latestResults[result.quizName] = result;
    });

    // 获取每个 Quiz 结果（没有数据则填充空白）
    const quiz1 = latestResults["Quiz 1"];
    const quiz2 = latestResults["Quiz 2"];
    const quiz3 = latestResults["Quiz 3"];

    const ctx1 = document.getElementById("quizChart1").getContext("2d");
    const ctx2 = document.getElementById("quizChart2").getContext("2d");
    const ctx3 = document.getElementById("quizChart3").getContext("2d");

    function drawPieChart(ctx, quizName, correct, incorrect) {
        new Chart(ctx, {
            type: "pie",
            data: {
                labels: ["Correct", "Incorrect"],
                datasets: [{
                    data: [correct, incorrect],
                    backgroundColor: ["#4CAF50", "#FF5733"]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: quizName
                    }
                }
            }
        });
    }

    // 确保 Quiz 1 在左侧，Quiz 2 在中间，Quiz 3 在右侧
    if (quiz1) drawPieChart(ctx1, "Quiz 1", quiz1.score, quiz1.total - quiz1.score);
    if (quiz2) drawPieChart(ctx2, "Quiz 2", quiz2.score, quiz2.total - quiz2.score);
    if (quiz3) drawPieChart(ctx3, "Quiz 3", quiz3.score, quiz3.total - quiz3.score);
});
