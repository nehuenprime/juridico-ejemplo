const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const menuMobile = document.getElementById("menuMobile");
const overlay = document.getElementById("overlay");

function abrirMenu(){
    menuMobile.classList.add("active");
    overlay.classList.add("active");
}

function cerrarMenu(){
    menuMobile.classList.remove("active");
    overlay.classList.remove("active");
}

menuBtn.addEventListener("click", abrirMenu);
closeBtn.addEventListener("click", cerrarMenu);
overlay.addEventListener("click", cerrarMenu);




const navbar = document.querySelector(".navbar-custom");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});