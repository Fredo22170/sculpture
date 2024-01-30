// DOM elements
const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navIconEl = document.querySelector('.nav__icon');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');
const body = document.body;

// Event listeners
window.addEventListener('DOMContentLoaded', () => {
  body.style.visibility = 'visible';
});

const toggleNav = () => {
  navList.classList.toggle('show');
  navBgOverlayEl.classList.toggle('active');
  body.style.overflow = body.style.overflow === 'hidden' ? 'initial' : 'hidden';
};

navIconEl.addEventListener('click', toggleNav);
navCloseEl.addEventListener('click', toggleNav);
navBgOverlayEl.addEventListener('click', toggleNav);

// AOS
AOS.init({
  offset: 200,
  delay: 100,
  duration: 400,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

// Navbar and forms
const toggleElement = (element, activeClass) => {
  element.classList.toggle(activeClass);
};

const navbar = document.querySelector('.header .navbar');
const searchForm = document.querySelector('.header .search-form');
const loginForm = document.querySelector('.header .login-form');
const contactInfo = document.querySelector('.contact-info');

const toggleNavbarElement = (selector) => {
  const element = document.querySelector(selector);
  element.addEventListener('click', () => {
    toggleElement(navbar, 'active');
    toggleElement(searchForm, 'active');
    toggleElement(loginForm, 'active');
  });
};

['#menu-btn', '#search-btn', '#login-btn'].forEach((selector) => toggleNavbarElement(selector));

document.querySelector('#info-btn').addEventListener('click', () => {
  contactInfo.classList.add('active');
});

document.querySelector('#close-contact-info').addEventListener('click', () => {
  contactInfo.classList.remove('active');
});

window.onscroll = () => {
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  contactInfo.classList.remove('active');
};

// Swiper instances
const initSwiper = (selector, slidesPerView) => {
  new Swiper(selector, {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
      450: { slidesPerView: 2 },
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1000: { slidesPerView: 5 },
    },
  });
};

initSwiper('.home-slider');
initSwiper('.reviews-slider', 3);
initSwiper('.blogs-slider', 3);
initSwiper('.logo-slider', 5);
