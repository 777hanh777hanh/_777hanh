const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const pos = $('.banner');

pos.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(e) {
    pos.style.setProperty('--x', e.clientX + 'px');
    pos.style.setProperty('--y', e.clientY + 'px');
}
