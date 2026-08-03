// Welcome message
window.addEventListener("load", function () {
    console.log("Welcome to Brandon Web Designs!");
});

// Navigation background effect
const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        nav.style.background = "#0b1120";
        nav.style.boxShadow = "0 8px 25px rgba(0,0,0,.5)";

    } else {

        nav.style.background = "#111827";
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    }

});