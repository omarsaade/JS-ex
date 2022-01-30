var s = document.getElementById("s");
var ho = document.getElementById("h");
var text = document.getElementById("text");


s.onclick = function () {

    text.type = "text";


}

h.onclick = function () {

    text.type = "password";


}


////////////////////


//ex2
var myButton = document.getElementById("my-button");
var myInput = document.getElementById("my-input");

myButton.onclick = function () {
    if (myInput.type == "password") {
        myInput.setAttribute("type", "text");
        this.textContent = "hide password"
    }
    else {
        myInput.setAttribute("type", "password");
        this.textContent = "show Password"
    }

}






