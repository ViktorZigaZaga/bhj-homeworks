const headShot = document.getElementById("dead");
const beside = document.getElementById("lost");
const holes = document.getElementsByClassName("hole");

const restart = (message) => {
    alert(message);
    headShot.textContent = 0;
    beside.textContent = 0;
}

for (let e of holes) { 
    e.addEventListener("click", clickHole);

    function clickHole() {
        if (e.classList.contains("hole_has-mole")) {
            if (headShot.textContent < 9) {
                headShot.textContent++;
            } else {
                restart("Вы враг бобров №1");
            }
        } else {
            if (beside.textContent < 4) {
                beside.textContent++;
            } else {
                restart("Мазила, как так можно?!");
            }
        }
    }
}