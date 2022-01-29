
// add default local storage class on body
// 3m tzid class m3ayane

document.body.classList.add(localStorage.getItem("pageColor") || "red");// zedna 3al body class esmo pageColor


// var c = localStorage.getItem("pageColor") || "red";// iza mafi lon bel local storage , het el red()
//truthyfalsy pattern red metel toogle naw3an ma
// console.log(c);//black


// 3amalna select lal 4 Li
var el = document.querySelectorAll(".color-switcher li");




var classesList = [];//array fadye



// loop on Elements
for (let i = 0; i < el.length; i++) {
    // console.log(el);
    // console.log(el[i]);
    //Get Classes list
    classesList.push(el[i].getAttribute("data-color"));
    // Get the value of data-color and push into classesList
    //  (4) ['red', 'green', 'black', 'purple']




    el[i].addEventListener("click",
        function () {
            //Remove All old Classes
            document.body.classList.remove(...classesList); //red green black purple  btshilon
            //add current class from li data Attribute
            document.body.classList.add(this.getAttribute("data-color"));//green
            //add Data To Local Storage
            localStorage.setItem("pageColor", this.getAttribute("data-color"));
            // nehna sammayneha pageColor
        }, false
    );
}




//////////////////



