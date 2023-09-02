
let clock_svg = document.getElementById("numbers2");
for (let i = 1; i < 13; i++) {
    let nums2 = document.createElement("div");
    nums2.setAttribute("fill", "red");
    nums2.innerText = `${i}`;
    nums2.id = "text";
    let ang =(Math.PI*2)/12*i - Math.PI/2;
    nums2.style.left = `${Math.cos(ang)*300+400}px`;
    nums2.style.top =  `${Math.sin(ang)*300+400}px`;
    let clock_svg = document.getElementById("numbers2");
    clock_svg.appendChild(nums2);
}


function setFirstTime() {
    let now = new Date();
    let hour = now.getHours();
    let second = now.getSeconds();
    let minute = now.getMinutes();
    var hourDegree = 360 / 12 * hour + 360 / 12 * (minute / 60);
    var secondDegree = 360 / 60 * second;
    var minuteDegree = 360 / 60 * minute;
    let hourLine = document.getElementById("hour");
    hourLine.style.transform = `rotate(${hourDegree}deg)`;
    let secondLine = document.getElementById("second");
    secondLine.style.transform = `rotate(${secondDegree}deg)`;
    let minuteLine = document.getElementById("minute");
    minuteLine.style.transform = `rotate(${minuteDegree}deg)`;
}
setFirstTime();

setInterval(() => {
    let now = new Date();
    let hour = now.getHours();
    let second = now.getSeconds();
    let minute = now.getMinutes();
    var hourDegree = 360 / 12 * hour + 360 / 12 * (minute / 60);
    var secondDegree = 360 / 60 * second;
    var minuteDegree = 360 / 60 * minute;
    let hourLine = document.getElementById("hour");
    hourLine.style.transform = `rotate(${hourDegree}deg)`;
    let secondLine = document.getElementById("second");
    secondLine.style.transform = `rotate(${secondDegree}deg)`;
    let minuteLine = document.getElementById("minute");
    minuteLine.style.transform = `rotate(${minuteDegree}deg)`;
}, 1000);
