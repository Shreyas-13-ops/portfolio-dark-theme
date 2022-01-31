let btnMenu = document.querySelector(".hamburger");
let btnSubmit = document.querySelector(".btn-submit");
let menu = document.querySelector(".menu");

btnMenu.addEventListener('click', () => {
     menu.classList.toggle("active");
    // console.log("Menu btn clicked!");
});

let btnHello = document.querySelector('.btn-hello');
let contactSection = document.querySelector('.contact');

btnHello.addEventListener('click', () => {
   let contactUrl =  'https://dark-theme-portfolio.netlify.app/#contact';

    window.location.href = contactUrl;
});

// btnSubmit.addEventListener('submit', () => {
//     document.querySelector('form')
//     console.log("Form btn clicked!");
// });

