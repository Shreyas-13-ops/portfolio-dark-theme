let btnMenu = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");

btnMenu.addEventListener('click', () => {
     menu.classList.toggle("active");
    console.log("btn clciked!");
})

let btnHello = document.querySelector('.btn-hello');
let contactSection = document.querySelector('.contact');

btnHello.addEventListener('click', () => {
   let contactUrl =  'https://dark-theme-portfolio.netlify.app/#contact';

    window.location.href = contactUrl;
})

