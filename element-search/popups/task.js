const elFirst = document.getElementById("modal_main");
const elSecond = document.getElementById("modal_success");
const closeCross = document.getElementsByClassName("modal__close");

elFirst.classList.toggle("modal_active");

const btn = document.querySelector(".btn");

btn.addEventListener("click", clickBtn);

function clickBtn() {
    elFirst.classList.toggle("modal_active");
    elSecond.classList.toggle("modal_active");
}

Array.from(closeCross).forEach(element => {
    element.addEventListener("click", clickClose);

    function clickClose() {
        this.closest(".modal").classList.remove("modal_active");
    }
});
