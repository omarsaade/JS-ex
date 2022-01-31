var text = document.getElementById("text");
var span = document.getElementById("span");
// var s = + text.value;
text.oninput = function () {
    span.innerHTML = 50 - this.value.length;

    if (this.value.length > 50) {
        span.style.color = "red"
    } else {
        span.style.color = "black"
    }


}



