const rotatorCase = Array.from(document.getElementsByClassName("rotator__case"));

let activeIndex = rotatorCase.indexOf(document.getElementsByClassName("rotator__case_active").item(0));

setInterval(() => {
    rotatorCase[activeIndex].classList.remove("rotator__case_active");
    activeIndex = (activeIndex + 1) % rotatorCase.length;
    rotatorCase[activeIndex].classList.add("rotator__case_active");
    rotatorCase[activeIndex].style.color = rotatorCase[activeIndex].dataset.color;
}, parseInt(rotatorCase[activeIndex].dataset.speed));
