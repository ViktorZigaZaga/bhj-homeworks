const reveal = Array.from(document.getElementsByClassName("reveal"));

// document.addEventListener("scroll", function() {
//     reveal.forEach((element) => {

//         element.getBoundingClientRect().bottom < 0 || element.getBoundingClientRect().top > window.innerHeight 
//             ? element.classList.remove("reveal_active") 
//             : element.classList.add("reveal_active");
//     });
// });


document.addEventListener("scroll", function() {
    reveal.forEach((element) => {
        const { innerHeight } = window;
        const { top, bottom } = element.getBoundingClientRect();
        if (top < innerHeight && bottom > 0) {
            element.classList.add("reveal_active");
        } else {
            element.classList.remove("reveal_active");
        }
    });
});