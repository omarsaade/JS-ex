// var p = document.getElementById("p");

// window.onload = function () {
//     p.style.color = `#${Math.floor((Math.random() * 1578800) + 1)}`;


// }

//////////////////////

// var po = document.getElementById("p").textContent;

// window.onload = function () {

//     var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var result = '';
//     for (var i = 0; i < 6; i++) {
//         result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));

//     }
//     po.style.color = `#${result.toUpperCase()}`;


//     // po.style.color = result;
//     // console.log(`#${result.toUpperCase()}`);

// }
////////////////////////
var cl = ["a", "b", "c", "d"];

var text = document.getElementById("p").innerText;
const rndInt = Math.floor(Math.random() * 3); // 0,1,2,3


document.body.setAttribute("class", cl[rndInt]);







