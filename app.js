console.log('Website made by Conor Bailey')

const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll(".nav-link");
const header = document.querySelector('.header');
const splash = document.querySelector('.splash');

menuOpen.addEventListener('click', menuToggle);
menuClose.addEventListener('click', menuToggle);

//Splash Screen
window.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('hide')}, 2000);
});

let splashLogo = anime({
    targets: '.splash-logo',
    opacity: [0, 100],
    easing: 'easeInOutExpo',
    duration: 2000,
    translateY: window.innerHeight*-0.49,
    delay: 100,
    scale: 0.6,
})


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