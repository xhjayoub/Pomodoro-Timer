import moment from "moment";
import { updateCountTimer } from "./dom";

const currentState = {
    minute:0,
    second:0,
}
function timer(n) {
    let timeCount = moment();
    timeCount.set({ minute: n, second: 0 });
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

export { timer, currentState };