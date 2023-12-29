let seconds = 0;
let hours = 0;
let minutes = 0;
let sec = document.getElementById('secs');
let mins = document.getElementById('mins');
let hrs = document.getElementById('hours');
let intervalId;
function Start() {
    intervalId = setInterval(timer, 1000);
}

// Update the time every second
function timer() {
    seconds += 1;
    sec.innerHTML = "0" + seconds;
    if (seconds >= 10) {
        sec.innerHTML = seconds;
        if (seconds > 60) {
            minutes += 1;
            mins.innerHTML = "0" + minutes + ":";
            if (minutes >= 10) {
                mins.innerHTML = minutes + ":";
                if (minutes > 60) {
                    hours += 1;
                    hrs.innerHTML = "0" + hours + ":";
                    if (hours >= 10) {
                        hrs.innerHTML = hours + ":";
                    }
                    minutes = 0;
                }
            }
            seconds = 0;
        }
    }

}

function Stop() {
    if (seconds < 10) {
        sec.innerHTML = '0' + seconds;
    } if (minutes < 10) {
        mins.innerHTML = "0" + minutes + ":";
    } if (hours > 10) {
        hrs.innerHTML = '0' + hours + ":";
    }
    clearInterval(intervalId);
}


function Reload() {
    location.reload();
}