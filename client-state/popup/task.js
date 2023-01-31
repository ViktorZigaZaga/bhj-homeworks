const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close')

const pairs = document.cookie.split("; ");
const cookies = pairs.find(p => p.startsWith("isClosed" + "="));

if (cookies) {
    modal.classList.remove("modal_active");
} else {
    modal.classList.add("modal_active");
}

modalClose.addEventListener("click", (event) => {
    modal.classList.remove("modal_active");
    document.cookie = "isClosed=true";
    event.preventDefault();
});