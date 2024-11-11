import { timer } from "./timer";
function appendToBody() {
    document.querySelector("body").append(...arguments);
}
function updateCountTimer(updatedTime) {
    document.querySelector(".countTimer").innerText = updatedTime;
}
function InitializeElements() {
    const pomodoroContainer = document.createElement("div");
    pomodoroContainer.classList.add("pomodoroContainer");

    const timerType = document.createElement("div");
    timerType.classList.add("timers");
    let minutes;
    // timers
    const pomodoroTimer = document.createElement("button");
    pomodoroTimer.classList.add("pomodoroTimer","timer");
    pomodoroTimer.innerText = "pomodoro";
    pomodoroTimer.addEventListener("click", () => {
        minutes = 25;
    });

    const shortBreakTimer = document.createElement("button");
    shortBreakTimer.classList.add("shortBreakTimer", "timer");
    shortBreakTimer.innerText = "short break";
    shortBreakTimer.addEventListener("click", () => {
        minutes = 5;
    });
    const longBreakTimer = document.createElement("button");
    longBreakTimer.classList.add("pomodoroTimer", "timer");
    longBreakTimer.innerText = "long break";
    longBreakTimer.addEventListener("click", () => {
        minutes = 15;
    });
    timerType.append(pomodoroTimer,shortBreakTimer,longBreakTimer);

    const countTimer = document.createElement("div");
    countTimer.innerText = "25:00";
    countTimer.classList.add("countTimer");

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const startButton = document.createElement("button");
    startButton.innerText = "start";
    startButton.classList.add("start");
    startButton.addEventListener("click", () => {
        timer(minutes);
    })

    // TODO: Restart button
    // TODO: Config button

    // append to actions
    actions.append(startButton);

    // Append to container
    pomodoroContainer.append(timerType, countTimer, actions);
    
    appendToBody(pomodoroContainer);
}


export {InitializeElements, updateCountTimer};