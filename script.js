let seconds = 0;
let minutes = 0;
let myInterval = null; 

function myTimer() {
    seconds++;
    if (seconds == 60) {
        minutes++;
        seconds = 0;
        if (minutes == 60) {
            minutes = 0;
        }
    }
    const watch = document.getElementById("watch");
    watch.innerHTML = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);  
}

document.getElementById("start").addEventListener("click", startTimer);

function startTimer() {
    if (myInterval === null) {  
        myInterval = setInterval(myTimer, 1000);
    }
}

document.getElementById("stop").addEventListener("click", stopTimer);

function stopTimer() {
    clearInterval(myInterval);
    myInterval = null;  
}

document.getElementById("reset").addEventListener("click", resetTimer);

function resetTimer() {
    clearInterval(myInterval);
    myInterval = null;
    seconds = 0;
    minutes = 0;
    watch.innerHTML = "00:00";
}
