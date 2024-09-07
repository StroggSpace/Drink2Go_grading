const menuList = document.querySelector('.header__nav-list');
const menuItem = document.querySelector('#burger');
const burgerButton = menuItem.querySelector('.header__user-burger');
const mobileBreakpoint = window.matchMedia('(max-width: 767px)');

function onMobileBurger() {
  if (mobileBreakpoint.matches) {
    menuItem.classList.remove('visually-hidden');
    burgerButton.classList.remove('header__user-burger--open');
    burgerButton.classList.add('header__user-burger--close');
    menuList.style.height = '0';
  } else {
    menuItem.classList.add('visually-hidden');
    menuList.style.height = '100%';
  }
}

burgerButton.addEventListener('click', () => {
  if(burgerButton.classList.contains('header__user-burger--close')) {
    burgerButton.classList.replace('header__user-burger--close', 'header__user-burger--open');
    menuList.style.height = '100%';
  } else if (burgerButton.classList.contains('header__user-burger--open')) {
    burgerButton.classList.replace('header__user-burger--open', 'header__user-burger--close');
    menuList.style.height = '0';
  }
});

window.addEventListener('resize', onMobileBurger);
