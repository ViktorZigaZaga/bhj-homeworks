const book = document.getElementById("book");
const fontSize = Array.from(document.getElementsByClassName("font-size"));
const controlColor = Array.from(document.getElementsByClassName("book__control_color").children);
const controlBackground = Array.from(document.getElementsByClassName("book__control__background").children);

fontSize.forEach((el) => {
    el.onclick = (event) => {
        event.preventDefault();
        document.querySelector(".font-size_active").classList.remove("font-size_active");
        el.classList.add("font-size_active");
        book.classList.remove("book_fs-small","book_fs-big");
        book.classList.add(`book_fs-${el.getAttribute("data-size")}`);
    }
});

controlColor.forEach((el) => {
    el.onclick = (event) => {
        event.preventDefault();
        el.closest(".book__control_color").querySelector(".color_active").classList.remove("color_active");
        el.classList.add("color_active");
        book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
        book.classList.add(`book_color-${el,getAttribute("data-text-color")}`);
    }
});

controlBackground.forEach((el) => {
    el.onclick = (event) => {
        event.preventDefault();
        el.closest(".book__control_background").querySelector(".color_active").classList.remove("color_active");
        el.classList.add("color_active");
        book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
        book.classList.add(`book_color-${el,getAttribute("data-text-color")}`);
    }
});