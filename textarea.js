var count = document.getElementById("count"),//count
    textarea = document.getElementById("text"),//textarea
    maxLength = textarea.getAttribute('maxlength');// 100

textarea.oninput = function () {
    count.innerHTML = maxLength - textarea.value.length; //100 -
    // count.innerHTML = maxLength - this.value.length; //100 -
    if (count.innerHTML == 0) {
        count.style.color = "red";
    } else {
        count.style.color = "black";
    }

}



/////////////////////
var count = document.getElementById("count"),//count
    textarea = document.getElementById("text"),//textarea
    maxLength = textarea.getAttribute('maxlength');// 100

textarea.oninput = function () {
    count.innerHTML = maxLength - textarea.value.length; //100 -
    // count.innerHTML = maxLength - this.value.length; //100 -
    if (count.innerHTML == 0) {
        count.classList.add('zero');
    } else {
        count.classList.remove('zero');
    }

}
