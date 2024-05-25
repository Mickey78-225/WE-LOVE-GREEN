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