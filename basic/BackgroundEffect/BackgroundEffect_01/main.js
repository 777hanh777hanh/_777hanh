let isHueRotate = false;
window.addEventListener('click', () => {
    isHueRotate = !isHueRotate;
});

const container = document.querySelector('.container');

let n = 600;

// add 100 'div' to container
function addBox(n) {
    for (let i = 0; i < n; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
    }
}
addBox(n);

function animateBoxes() {
    const boxes = document.querySelectorAll('.box');
    const index = Math.floor(Math.random() * boxes.length);

    if (isHueRotate) {
        boxes[index].classList.remove('hue-rotate');
        boxes[index].classList.toggle('animate');
    } else {
        boxes[index].classList.remove('animate');
        boxes[index].classList.toggle('hue-rotate');
    }
}

setInterval(animateBoxes, 5);
