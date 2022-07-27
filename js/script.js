const main = document.querySelector('main');
const openMenuElement = document.querySelector('.mobile-menu');
const closeMenuElement = document.querySelector('.mobile-close-button');
const mobileNavigationMenu = document.querySelector('.mobile-naviation');
// functions
function openMobileMenu() {
  mobileNavigationMenu.classList.remove('hidden');
  main.classList.add('hidden');
}
function closeMobileMenu() {
  mobileNavigationMenu.classList.add('hidden');
  main.classList.remove('hidden');
}
// event listners
openMenuElement.addEventListener('click', openMobileMenu);
closeMenuElement.addEventListener('click', closeMobileMenu);
