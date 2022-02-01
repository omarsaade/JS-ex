var text = document.getElementById("txt");


text.onfocus = function () {
    this.placeholder = "";
}

text.onblur = function () {
    this.placeholder = "type here";
}