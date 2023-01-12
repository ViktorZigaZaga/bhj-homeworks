const cookie = document.getElementById("cookie");
const cookieCounter = document.getElementById("clicker__counter");
const cookieSpeed = document.getElementById("clicker__speed");
let count = 0;
let startTime = new Date();

cookie.onclick = function() {
    count++;
    cookieCounter.textContent = count;

    count % 2 != 0 ? cookie.width = 250 : cookie.width = 200;

    let endTime = new Date();
    let speed = 1 / ((endTime - startTime) / 1000);
    startTime = endTime;

    cookieSpeed.textContent = speed.toFixed(2);
}

