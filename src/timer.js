import moment from "moment";

function timer() {
    let timeCount = moment();
    timeCount.set({ minute: 25, second: 0 });
    const formatter = "mm:ss";
    let intervalID = setInterval(() => {
        timeCount.set({ second: timeCount.second() - 1 });
        // TODO: update timer display
        console.log(timeCount.format(formatter));
    }, 1000)
}
timer();