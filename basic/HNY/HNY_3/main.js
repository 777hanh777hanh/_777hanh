const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('mousemove', handleMouseMove);
});

function handleMouseMove(e) {
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;

    e.target.style.setProperty('--x', x + 'px');
    e.target.style.setProperty('--y', y + 'px');
}
