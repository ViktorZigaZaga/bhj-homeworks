const sliders = Array.from(document.getElementsByClassName("slider__item"));
const dots = Array.from(document.getElementsByClassName("slider__dot"));
const sliderArrowPrev = document.querySelector(".slider__arrow_prev");
const sliderArrowNext = document.querySelector(".slider__arrow_next");

sliders[0].classList.add("slider__item_active");
dots[0].classList.add("slider__dot_active");

function changeSlider(item) {
    const indexActiveItem = sliders.findIndex(slider => slider.classList.contains("slider__item_active"));

    if(indexActiveItem === item) {
        return;
    }

    if(item < 0) {
        item = sliders.length - 1;
    }

    if(item > sliders.length - 1) {
        item = 0;
    }

    sliders[indexActiveItem].classList.remove("slider__item_active");
    sliders[item].classList.add("slider__item_active");

    dots[indexActiveItem].classList.remove("slider__dot_active");
    dots[item].classList.add("slider__dot_active");
}

sliderArrowPrev.addEventListener("click", () => {
    let indexActiveItem = sliders.findIndex(slider => slider.classList.contains("slider__item_active"));
    changeSlider(--indexActiveItem);
});

sliderArrowNext.addEventListener("click", () => {
    let indexActiveItem = sliders.findIndex(slider => slider.classList.contains("slider__item_active"));
    changeSlider(++indexActiveItem);
});

document.addEventListener("wheel", (event) => {
    let indexActiveItem = sliders.findIndex(slider => slider.classList.contains("slider__item_active"));
    event.wheelDelta < 0 ? changeSlider(indexActiveItem + 1) : changeSlider(indexActiveItem - 1); 
});

dots.forEach(el => {
    el.addEventListener("click", () => {
        changeSlider(dots.indexOf(el));
    });
});