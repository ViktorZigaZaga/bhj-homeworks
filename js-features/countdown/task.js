const timer = document.getElementById("timer");

const countTime = new Date(timer.textContent * 1000);

const interval = setInterval(() => {
    const hh = String(countTime.getHours()).padStart(2, "0");
    const mm = String(countTime.getMinutes()).padStart(2, "0");
    const ss = String(countTime.getSeconds()).padStart(2, "0");
    timer.textContent = `${hh}:${mm}:${ss}`;

    countTime.setSeconds(countTime.getSeconds() - 1);

    if (countTime.getTime() < 0) {  
        alert("Вы победили в конкурсе!");
        // location.assign('https://bookshake.net/get-file/cbda9be6-fe21-47a6-a248-7f9e79d5a287?format=txt');
        clearInterval(interval);
    }
}, 1000);




