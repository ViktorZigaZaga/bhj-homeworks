const menuLink = Array.from(document.getElementsByClassName("menu__link"));

menuLink.forEach(el => {
    el.onclick = function () {
        let activeSelect = el.parentElement.querySelector("ul");
        let activeMenu = el.closest(".menu_main").querySelector(".menu_active");

        if(activeSelect.classList.contains("menu_active")) {
            activeMenu.classList.remove("menu_active");
        } else if (activeMenu) {
            activeMenu.classList.remove("menu_active");
            activeSelect.classList.add("menu_active");
        } else {
            activeSelect.classList.add("menu_active"); 
        }
        return false;
    }
});