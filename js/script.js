document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".splide", {
        height: "70vh",
        arrows: false,
        pagination: false,
        padding: "13rem",
        gap: "5rem",
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
