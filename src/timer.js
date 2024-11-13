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
    const firstFormat = timeCount.format(formatter);
    let intervalID = setInterval(() => {
        timeCount.set({ second: timeCount.second() - 1 });
        if (timeCount.minute() === 0 && timeCount.second() === 0) {
            console.log("yees");
            console.log(firstFormat);
            updateCountTimer(firstFormat);
            clearInterval(intervalID);
        } else {
            updateCountTimer(timeCount.format(formatter));
            currentState.minute = timeCount.minute();
            currentState.second = timeCount.second();
        }
    }, 1000)
    return intervalID;
}
function neededClearInterval(intervalID) {
    if (intervalID !== undefined) {
        clearInterval(intervalID);
    }
}

export { timer, currentState, neededClearInterval };