import moment from "moment";
import { updateCountTimer } from "./dom";

const currentState = {
    minute:0,
    second:0,
}
function timer(minutes, seconds) {
    let timeCount = moment();
    timeCount.set({ minute: minutes, second: seconds });
    const formatter = "mm:ss";
    let intervalID = setInterval(() => {
        timeCount.set({ second: timeCount.second() - 1 });
        // TODO: update timer display
        if (timeCount.minute() === 0 && timeCount.second() === 0) {
            clearInterval(intervalID);
        }
        updateCountTimer(timeCount.format(formatter));
        currentState.minute = timeCount.minute();
        currentState.second = timeCount.second();
    }, 1000)
    return intervalID;
}
function neededClearInterval(intervalID) {
    if (intervalID !== undefined) {
        clearInterval(intervalID);
    }
}

export { timer, currentState, neededClearInterval };