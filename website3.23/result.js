 document.addEventListener("DOMContentLoaded", function () {
            let results = JSON.parse(localStorage.getItem("quizResults")) || [];

            function createPieChart(canvasId, data) {
                if (!data) return; // 如果没有数据，不渲染该饼图
                
                new Chart(document.getElementById(canvasId), {
                    type: 'pie',
                    data: {
                        labels: ["Correct", "Incorrect"],
                        datasets: [{
                            data: [data.score, data.total - data.score],
                            backgroundColor: ["#4CAF50", "#FF5252"]
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: data.quizName
                            }
                        }
                    }
                });
            }

            // 为每个测验动态创建 canvas
            let chartContainer = document.getElementById("charts-container");
            results.forEach((quiz, index) => {
                let canvas = document.createElement("canvas");
                canvas.id = `quizChart${index + 1}`;
                chartContainer.appendChild(canvas);
                createPieChart(canvas.id, quiz);
            });
        });