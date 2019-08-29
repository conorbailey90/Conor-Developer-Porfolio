console.log('Website made by Conor Bailey')

const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll(".nav-link");
const header = document.querySelector('.header');

menuOpen.addEventListener('click', menuToggle);
menuClose.addEventListener('click', menuToggle);

navLink.forEach(function(elem) {
    elem.addEventListener("click", menuToggle);
  });

function menuToggle(){
    nav.classList.toggle('active')
    console.log('clicked')
}

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