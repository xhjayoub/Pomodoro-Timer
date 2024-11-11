import moment from "moment";
import { updateCountTimer } from "./dom";

function timer() {
    let timeCount = moment();
    timeCount.set({ minute: 25, second: 0 });
    const formatter = "mm:ss";
    let intervalID = setInterval(() => {
        updateCountTimer(timeCount.format(formatter));
        timeCount.set({ second: timeCount.second() - 1 });
        // TODO: update timer display
        if (timeCount.minute() === 0 && timeCount.second() === 0) {
            clearInterval(intervalID);
        }
    }, 1000)
}

export { timer };