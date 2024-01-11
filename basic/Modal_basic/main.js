const frontElement = document.querySelector('.front');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalOverlay = document.querySelector('.modal__overlay');
const btn = document.querySelector('.btn');

modalOverlay.addEventListener('click', function () {
    modal.style.visibility = '';
    modal.style.opacity = '';
    frontElement.removeAttribute('tabindex');
});
modalClose.addEventListener('click', function () {
    modal.style.visibility = '';
    modal.style.opacity = '';

    frontElement.removeAttribute('tabindex');
});

btn.addEventListener('click', function () {
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    frontElement.setAttribute('tabindex', '-1');
});
