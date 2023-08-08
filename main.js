let timer = document.getElementById('timer');
let takeAPause = document.getElementById('break');

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let startMinutes = document.getElementById('start-minutes');
let startSeconds = document.getElementById('start-seconds');

let breakMinutes = document.getElementById('break-minutes');
let breakSeconds = document.getElementById('break-seconds');


const boxes = document.getElementsByClassName('main-content');

let startTimer;

start.addEventListener('click', function () {
    if (startTimer === undefined) {
        startTimer = setInterval(pomodoroTimer, 1000);
    } else {
        alert('Timer is already running');
    }
})

reset.addEventListener('click', function(){
    startMinutes.innerText = '25';
    startSeconds.innerText = '00';

    stopInterval();
    startTimer = undefined;
})

timer.addEventListener('click', function(){
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = '#4f153d';
    }

    stopInterval();
    startTimer = undefined;
})

takeAPause.addEventListener('click', function(){
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = '#e3a7d1'; // Apply changes to each element
    }

    stopInterval();
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval();
    startTimer = undefined;
})


function pomodoroTimer() {
    if (startSeconds.innerText != 0) {
        startSeconds.innerText = String(startSeconds.innerText - 1).padStart(2, '0');
    } else if (startMinutes.innerText != 0 && startSeconds.innerText == 0) {
        startSeconds.innerText = '59';
        startMinutes.innerText = String(startMinutes.innerText - 1).padStart(2, '0');
    }

    if (startMinutes.innerText == 0 && startSeconds.innerText == 0) {
        if (breakSeconds.innerText != 0) {
            breakSeconds.innerText = String(breakSeconds.innerText - 1).padStart(2, '0');
        } else if (breakMinutes.innerText != 0 && breakSeconds.innerText == 0) {
            breakSeconds.innerText = '59';
            breakMinutes.innerText = String(breakMinutes.innerText - 1).padStart(2, '0');
        }
    }

    if (startMinutes.innerText == 0 && startSeconds.innerText == 0 && breakMinutes.innerText == 0 && breakSeconds.innerText == 0) {
        startMinutes.innerText = '25';
        startSeconds.innerText = '00';

        breakMinutes.innerText = '5';
        breakSeconds.innerText = '00';
    }
}

function stopInterval(){
    clearInterval(startTimer);
}
