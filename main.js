
let nums=document.createElement("div");
nums.setAttribute("fill","red");
nums.innerText="12";
nums.id="text";

let clock_svg=document.getElementById("numbers");
clock_svg.appendChild(nums);




function setFirstTime(){
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
