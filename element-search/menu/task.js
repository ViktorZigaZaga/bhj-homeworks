const menuLink = Array.from(document.getElementsByClassName("menu__link"));
const menuSub = Array.from(document.getElementsByClassName("menu_sub"));

menuLink.forEach(el => {
    el.onclick = function () {
        let activeSelect = el.nextElementSibling;

        if (activeSelect === null) {
            return;
        } else if (activeSelect.classList.contains("menu_sub") && activeSelect.classList.contains("menu_active")) {
            activeSelect.classList.remove("menu_active");
        } else if (activeSelect.classList.contains("menu_sub")) {
            menuSub.forEach(el => el.classList.remove("menu_active"));
            activeSelect.classList.add("menu_active");
        } else {
            activeSelect.classList.add("menu_active");
        }
        return false;
    }
});
