//Very imp:
//there is a big diff between .innnerHTML and .textContent
var text = "hello my friend my name is omar";
var i = 0;


var b = document.getElementById("button");


b.addEventListener("click", function () {
    var z = setInterval(() => {
        // document.getElementById("type").innerText += text[i];
        document.getElementById("type").textContent += text[i];

        i = i + 1;
        if (i == text.length) {
            clearInterval(z);
        }

    }, 100);





    // for (let i = 0; i < text.length; i++) {
    // document.getElementById("type").innerText += text[i];

    // }


}, false)

