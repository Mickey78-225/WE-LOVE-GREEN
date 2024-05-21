function handleScroll() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
        nav.classList.add("scrolled");
        console.log('scrolled');
    } else {
        nav.classList.remove("scrolled");
        console.log('no-scrolled');
    }
}

function addClassOnHover() {
    const composant_button = document.querySelector("button")
    const buttonClassName = composant_button.classList.value;
    if (buttonClassName == ".button__vert") {
        button.addEventListener("mouseover", () => {
            // button.classList.add(className);
            console.log(buttonClassName);
            console.log('in');
        });
        button.addEventListener("mouseout", () => {
            // button.classList.remove(className);
            console.log(buttonClassName );
            console.log('out');
        });
    }

    // button.addEventListener("mouseover", () => {
    //     // button.classList.add(className);
    //     console.log(buttonClassName);
    //     console.log('in');
    // });
    // button.addEventListener("mouseout", () => {
    //     // button.classList.remove(className);
    //     console.log(buttonClassName );
    //     console.log('out');
    // });
}

// Exemple d'utilisation :
addClassOnHover("monBouton", "hovered");
document.addEventListener("scroll", handleScroll);
