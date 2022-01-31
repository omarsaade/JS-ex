

function ho() {
    'use strict';
    var clock = new Date();


    var hours = clock.getHours();
    var min = clock.getMinutes();
    var sec = clock.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    // console.log(hours + ":" + min + ":" + sec);

    document.getElementById("watch").textContent = hours + ":" + min + ":" + sec;

}

setInterval(ho, 100);





