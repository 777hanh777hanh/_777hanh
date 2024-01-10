const allowDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
};

const drag = (e) => {
    e.dataTransfer.setData('text', e.target.id);
};

const drop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text');
    e.target.appendChild(document.getElementById(data));
};

const allDragBoxes = document.querySelectorAll('.drag-box div');
const allDropBoxes = document.querySelectorAll('.drop-box');

allDragBoxes.forEach((box) => {
    box.addEventListener('dragstart', drag);
});

allDropBoxes.forEach((box) => {
    box.addEventListener('drop', drop);
    box.addEventListener('dragover', allowDrop);
});

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    // reset page
    location.reload();
});
