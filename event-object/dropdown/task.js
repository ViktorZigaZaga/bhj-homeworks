const dropdownValue = document.querySelector(".dropdown__value");
const dropdownItems = Array.from(document.getElementsByClassName("dropdown__item"));

dropdownValue.addEventListener("click", function(el) {
    const dropdownList = el.target.closest(".dropdown").querySelector(".dropdown__list");
    if (dropdownList) {
        dropdownList.classList.toggle("dropdown__list_active");
    }
});

dropdownItems.forEach((item) => {
    item.addEventListener("click", function(e) {
        dropdownValue.textContent = this.textContent;
        document.querySelector(".dropdown__list_active").classList.remove("dropdown__list_active");
        e.preventDefault();   
    });
});
