const reveal = Array.from(document.getElementsByClassName("reveal"));

document.addEventListener("scroll", function() {
    reveal.forEach((element) => {
        element.getBoundingClientRect().bottom < 0 || element.getBoundingClientRect().top > window.innerHeight 
            ? element.classList.remove("reveal_active") 
            : element.classList.add("reveal_active");
    });
});