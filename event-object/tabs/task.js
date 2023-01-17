let tab = Array.from(document.getElementsByClassName("tab"));
let tabContent = Array.from(document.getElementsByClassName("tab__content"));

tab.forEach((element, index) => {
    element.addEventListener("click", function() {
        document.querySelector(".tab_active").classList.remove("tab_active");
        document.querySelector(".tab__content_active").classList.remove("tab__content_active");
        element.classList.add("tab_active");
        tabContent[index].classList.add("tab__content_active");
    });
});