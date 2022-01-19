let btnMenu = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");

btnMenu.addEventListener('click', () => {
     menu.classList.toggle("active");
    console.log("btn clciked!");
})