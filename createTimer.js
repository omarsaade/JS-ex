var timer = document.getElementById("time").textContent;
var convertTimer = parseInt(timer);

function start() {
    // const myInterval = setInterval(start, 1000);

    const myInterval = setInterval(() => {
        convertTimer = convertTimer - 1;

        document.getElementById("time").textContent = "0:" + convertTimer;
        if (convertTimer < 10) {
            document.getElementById("time").textContent = "0:0" + convertTimer;
        }
        if (convertTimer == 0) {
            clearInterval(myInterval);

        }
    }, 1000);
}







