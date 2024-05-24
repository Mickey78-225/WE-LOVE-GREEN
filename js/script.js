document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".splide", {
        width: "100%",
        arrows: false,
        pagination: false,
    });
    splide.mount();
    
});

function handleScroll() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}

document.addEventListener("scroll", handleScroll);