var image = document.getElementById("img"),
    ing = ["images.jfif", "download (1).jfif", "download.jfif", "RVF4061-scaled-650x400.jpg"];

function show() {
    // image.setAttribute("src", ing[Math.floor(Math.random() * 4)]);
    image.setAttribute("src", ing[Math.floor(Math.random() * ing.length)]);
    // image.src = "";
    // ta ysir hal ra2em el 3achwe2i add aw arib 3al 3adad el array taba3na
}


window.onload = function () {
    setInterval(show, 1000);
}
////////////////////////////////////////////

//meth2

var myElement = document.getElementById("myImg"),
    myImgs = [
        "http://localhost/Js-Tuts/images/01.png",
        "http://localhost/Js-Tuts/images/02.png",
        "http://localhost/Js-Tuts/images/03.png",
        "http://localhost/Js-Tuts/images/04.png",

    ];


function changeImage(myELement, myImg) {
    'use strict';
    setInterval(function () {
        var myRandomNum = Math.floor(Math.random() * myImgs.length);
        console.log(myRandomNum);
        myElement.src = myImgs[myRandomNum];

    }, 1000);
}

changeImage(myElement, myImgs);