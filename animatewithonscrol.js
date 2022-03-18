let section = document.querySelector(".three");

let spans = document.querySelectorAll(".progress span");




window.onscroll = function () {
    if (window.scrollY >= section.offsetTop + 50) { //+50 or -100
        console.log("Reached Section Three");
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
}