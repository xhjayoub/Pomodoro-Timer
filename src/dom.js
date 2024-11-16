import { timer, currentState, neededClearInterval } from "./timer";
import restartButtonPng from "./rsc/restartIcon.png";

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
    let minutes = 25;
    let seconds = 0;
    let intervalID;
    let mmss = '25:00';
    // timers
    const pomodoroTimer = document.createElement("button");
    pomodoroTimer.classList.add("pomodoroTimer","timer");
    pomodoroTimer.innerText = "pomodoro";
    pomodoroTimer.addEventListener("click", () => {
        minutes = 25;
        seconds = 0;
        countTimer.innerText = '25:00';
        mmss = '25:00';
        neededClearInterval(intervalID);
        startButton.innerText = 'start';
        startButtonType = 'start';
    });

    const shortBreakTimer = document.createElement("button");
    shortBreakTimer.classList.add("shortBreakTimer", "timer");
    shortBreakTimer.innerText = "short break";
    shortBreakTimer.addEventListener("click", () => {
        minutes = 5;
        seconds = 0;
        countTimer.innerText = '05:00';
        mmss = '05:00';
        neededClearInterval(intervalID);
        startButton.innerText = 'start';
        startButtonType = 'start';
    });
    const longBreakTimer = document.createElement("button");
    longBreakTimer.classList.add("pomodoroTimer", "timer");
    longBreakTimer.innerText = "long break";
    longBreakTimer.addEventListener("click", () => {
        minutes = 15;
        seconds = 0;
        countTimer.innerText = '15:00';
        mmss = '15:00';
        neededClearInterval(intervalID);
        startButton.innerText = 'start';
        startButtonType = 'start';
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
    let startButtonType = 'start';
    startButton.addEventListener("click", () => {
        if (startButtonType === 'start') {
            // when start is clicked
            startButton.innerText = 'pause';
            startButtonType = 'pause';
            intervalID = timer(minutes, seconds);
        } else {
            // when pause is clicked
            startButton.innerText = 'start';
            startButtonType = 'start';
            clearInterval(intervalID);
            minutes = currentState.minute;
            seconds = currentState.second;
        }
        
    })

    // TODO: Restart button
    const restartBtnCont = document.createElement("div");
    const restartBtn = document.createElement("img");
    restartBtn.setAttribute("src",restartButtonPng);
    restartBtnCont.append(restartBtn);
    restartBtnCont.addEventListener("click", () => {
        neededClearInterval(intervalID);
        updateCountTimer(mmss);
    })
    // TODO: Config button

    // append to actions
    actions.append(startButton, restartBtnCont);

    // Append to container
    pomodoroContainer.append(timerType, countTimer, actions);
    
    appendToBody(pomodoroContainer);
}


export {InitializeElements, updateCountTimer};