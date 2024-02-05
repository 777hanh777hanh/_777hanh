const prevBtn = document.querySelector('.btn--prev');
const nextBtn = document.querySelector('.btn--next');
const slider = document.querySelector('.slider');

let degree = 270;

prevBtn.addEventListener(
    'click',
    () => {
        degree += 90;
        slider.style.transform = ` perspective(100rem) rotateY(${degree}deg) `;
    },
    true,
);

nextBtn.addEventListener('click', () => {
    degree -= 90;
    slider.style.transform = ` perspective(100rem) rotateY(${degree}deg) `;
});
