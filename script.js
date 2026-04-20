let timeLeft = 25 * 60;
let timeId = null;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

const updateDisplay = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const startTimer = () => {
    if (timeId !== null) return;

    timerId = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerId);
            timerId = null;
            alert("Tempo esgotado! Hora de dar uma Pausa.");
        }
    }, 1000);
};

pauseBtn.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
});

resetBtn.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
    timeLeft = 25 * 60;
    updateDisplay();
});
startBtn.addEventListener("click", startTimer);
