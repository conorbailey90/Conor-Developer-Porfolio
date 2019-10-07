console.log('Website made by Conor Bailey')

const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll(".nav-link");
const header = document.querySelector('.header');
const splash = document.querySelector('.splash');
const splashLogo = document.querySelector('.splash-logo');

menuOpen.addEventListener('click', menuToggle);
menuClose.addEventListener('click', menuToggle);

//Splash Screen
window.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('hide')}, 4000);
});

window.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splashLogo.classList.add('load')}, 500);
});



navLink.forEach(function(elem) {
    elem.addEventListener("click", menuToggle);
  });

function menuToggle(){
    nav.classList.toggle('active');
}

// Change Navbar CSS on scroll
window.onscroll = function(){
    var top = window.pageYOffset || document.body.scrollTop;
    if (top > 50) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
    };

// Smooth scroll script
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
  });