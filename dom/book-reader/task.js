const book = document.querySelector(".book");
const fontSize = Array.from(document.getElementsByClassName("font-size"));
const controlColor = Array.from(document.querySelector(".book__control_color").getElementsByClassName("color"));
const controlBackground = Array.from(document.querySelector(".book__control_background").getElementsByClassName("color"));

fontSize.forEach((el) => {
    el.addEventListener("click", (event) => {
        document.querySelector(".font-size_active").classList.remove("font-size_active");
        el.classList.add("font-size_active");
        book.classList.remove("book_fs-small","book_fs-big");
        book.classList.add(`book_fs-${el.getAttribute("data-size")}`);
        event.preventDefault();
    });
});

controlColor.forEach((el) => {
    el.addEventListener("click", (event) => {
        document.querySelector(".color_active").classList.remove("color_active");
        el.classList.add("color_active");
        book.classList.remove("book_color-black", "book_color-gray", "book_color-whitesmoke");
        book.classList.add(`book_color-${el.getAttribute("data-text-color")}`);
        event.preventDefault();
    });
});

controlBackground.forEach((el) => {
    el.addEventListener("click", (event) => {
        document.querySelector(".color_active").classList.remove("color_active");
        el.classList.add("color_active");
        book.classList.remove("book_bg-black", "book_bg-gray", "book_bg-white");
        book.classList.add(`book_bg-${el.getAttribute("data-bg-color")}`);
        event.preventDefault();
    });
});