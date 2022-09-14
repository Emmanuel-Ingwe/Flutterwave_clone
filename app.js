const modal = document.querySelector('.modal');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');

menu.addEventListener('click', () => {
    modal.classList.add('open-modal');
    menu.style.display = 'none';
    closeMenu.style.display = 'block';
});

closeMenu.addEventListener('mouseout', () => {
    closeMenu.classList.add('menurotate');
});

closeMenu.addEventListener('mouseover', () => {
    closeMenu.classList.remove('menurotate');
});

closeMenu.addEventListener('click', () => {
    modal.classList.remove('open-modal');
    menu.style.display = 'block';
    closeMenu.classList.remove('menurotate');
    closeMenu.style.display = 'none';

});

