// The End of the year Date to countdown To
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 1 , 2022 23:59:59").getTime();
//hay yaane e5er yom bel sene...getTime() btjeble el wa2et in milliseconds
console.log(countDownDate);//1640987999000 akbar men date now
// 1640987999000 milliseconds
// 1640987999000/1000
// 1640987999   senye
// 1640987999/60
// 27349799.983333334 da2i2a
// 27349799/60
// 455829.98333333334 se3a
// 455829/24
// 18992.875 yom
// 18992/365
// 52.032876712328765 sene


let counter = setInterval(() => {
    //GEt Date Now
    let dateNow = new Date().getTime();
    // console.log(dateNow);

    //Find The Date difference Between Now and Countdown Date
    let dateDiff = countDownDate - dateNow;//67315332 millseco

    //GEt Time Units
    // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24); //66 aw li tahet
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));//66
    // el days hye 66,726373 2abel el math.floor();
    // el 726373 hene reste taba3 el 2osme bel milliseconds w mena mnjib el hours

    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));//15
    //726373milliseconds => to hours = 15,2671445

    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));//33
    //2671445 /1000 * 60 = 15.1322

    let seconds = Math.floor((dateDiff % (1000 * 60)) / (1000)); //10

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    //66   15    33    10

    if (dateDiff < 0) {
        clearInterval(counter);
    }

}, 1000);










// ------------------------------------------------------
//days
//hours
//minutes
//seconds
let r = document.querySelector(".r");
let q = document.querySelector(".q");

setInterval(() => {

    const d = new Date("Dec 18 , 2022 23:59:59");
    const c = new Date();//date now



    let ab = d.getSeconds();
    let ac = c.getSeconds();

    var ad = ab - ac;//seconds difference

    let z = d.getMinutes();
    let s = c.getMinutes();

    var j = z - s;//minutes difference



    r.innerHTML = j;
    q.innerHTML = ad;
}, 1000);

//////////////////////////////////////////////
// 3546888/1000
// 3546.888
// 3546/60
// 59.1
// 60/60
// 1
//1/24
