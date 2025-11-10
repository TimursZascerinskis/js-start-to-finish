        const start = document.getElementById("start");
        const finish = document.getElementById("finish");
        const submitNumbers = document.getElementById("submitNumbers");
        const resultDiv = document.getElementById("result");
        const historyDiv = document.getElementById("history");

        function saveHistory(startValue, finishValue, numbers) {
            const historyItem = document.createElement("li");
            historyItem.classList.add("history-item");

            const historyText = document.createElement("span");
            historyText.textContent = `${numbers.join(", ")}`;

            historyItem.appendChild(historyText);

            historyDiv.appendChild(historyItem);
        }

        function startFinish() {
            const startValue = parseInt(start.value);
            const finishValue = parseInt(finish.value);

            let numbers = [];
            for (let i = startValue; i <= finishValue; i++) {
                numbers.push(i);
            }

            resultDiv.innerHTML = numbers.join(", ");

            saveHistory(startValue, finishValue, numbers);
        }

        submitNumbers.addEventListener("click", startFinish);