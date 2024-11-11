import moment from "moment";
import { updateCountTimer } from "./dom";

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
    }, 1000)
}

export { timer };