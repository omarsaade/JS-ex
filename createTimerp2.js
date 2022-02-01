var seconds = 55;    //number of seconds
var countDiv = document.getElementById('countdown');
// secondPass,
var countDown = setInterval(secondPass, 1000);

function secondPass() {

    var minutes = Math.floor(seconds / 60),
        remSeconds = seconds % 60;

    if (seconds < 10) {
        remSeconds = "0" + remSeconds;
    }
    countDiv.innerHTML = minutes + ":" + remSeconds;

    if (seconds > 0) {
        seconds = seconds - 1;
    } else {
        clearInterval(countDown);
        countDiv.innerHTML = "Done"
    }
}

// secondPass();