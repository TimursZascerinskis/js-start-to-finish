    const start = document.getElementById("start");
    const finish = document.getElementById("finish");
    const submitNumbers = document.getElementById("submitNumbers");

    function startFinish() {

        const startValue = parseInt(start.value);
        const finishValue = parseInt(finish.value);

        let numbers = [];
        for (let i = startValue; i <= finishValue; i++) {
            numbers.push(i);
        }

        document.getElementById("result").innerHTML =  numbers.join(", ");
    }
    submitNumbers.addEventListener("click", startFinish);