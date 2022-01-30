var text = document.getElementById("text");
var textarea = document.getElementById("textarea");
var pp = document.getElementById("a");
var po = document.getElementById("b");

text.onkeyup = function () {
    'use strict'
    pp.innerHTML = text.value;
    // this.value;
}

textarea.onkeyup = function () {
    // console.log("hi");
    po.textContent = textarea.value;
    //this.value

}

///////////////////////////////////////////
function tez() {

    pp.innerHTML = text.value;

    po.textContent = textarea.value;

}