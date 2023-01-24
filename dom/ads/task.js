const rotator = document.querySelector(".rotator");

function changeCase() {
    const rotatorActive = document.querySelector(".rotator__case_active");
    let nextRotatorActive = rotatorActive.nextElementSibling;

    if (nextRotatorActive == null) {
        nextRotatorActive = rotator.firstElementChild;
    }

    rotatorActive.classList.toggle("rotator__case_active");
    nextRotatorActive.classList.toggle("rotator__case_active");
    nextRotatorActive.style.color = nextRotatorActive.dataset.color;
    const speed = nextRotatorActive.dataset.speed;
    return setTimeout(changeCase, parseInt(speed));
}

changeCase();