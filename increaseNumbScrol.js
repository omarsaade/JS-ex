let nums = document.querySelectorAll('.nums .num');
let section = document.querySelector(".three");
//trigger one time only
let started = false; //function started ? no


window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!started) { //if true fut 3laya
            nums.forEach((num) => startCount(num));
        }
        started = true;//BTERJA3 BT3ABI FALSE MAHAL EL
        //  TRUE W MA BI3UD 2ADER YFUT 3AL CONDITION
    }
};



function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}




































// let header = document.querySelector(".header");
// let headerchild = document.querySelectorAll(".chldo");




// var no = Array.from(headerchild);

// window.onload = mizo;

// function mizo() {



//     no.forEach(e => {
//         var lo = e.innerHTML;
//         var aho = setInterval(() => {
//             e.innerHTML++;
//             if (e.innerHTML == e.getAttribute("data-goal")) {
//                 clearInterval(aho);
//             }
//         }, 10);

//     });
// }
