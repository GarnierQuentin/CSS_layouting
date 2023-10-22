const burger_menu = document.querySelector(".burger_menu");
const nav = document.querySelector("nav");
const body = document.querySelector("body");


burger_menu.addEventListener("click", () => {
    if (nav.style.display === "flex"){
        nav.style.transition = "all 0.5s";
        nav.style.display = "block";
        nav.style.left = "-110%";
        body.style.overflow = "visible";
    }
    else{
        nav.style.transition = "all 0.5s";
        nav.style.display = "flex";
        nav.style.left = "0%";
        body.style.overflow = "hidden";
    }
});