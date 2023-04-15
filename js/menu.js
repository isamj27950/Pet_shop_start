const burgerMenu = document.querySelector('#menu__burger');
const menuModal = document.querySelector('#menu__content');

burgerMenu.addEventListener('click', () => {
    menuModal.classList.toggle('active');
});
menuModal.addEventListener('click', () => {
    menuModal.classList.toggle('active');
});