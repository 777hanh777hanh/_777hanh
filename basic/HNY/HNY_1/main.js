const yearContainer = document.querySelector('.year');
const numbers = document.querySelectorAll('.number');

const number3 = document.querySelector('.number-3');
const number4 = document.querySelector('.number-4');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    // document.body.style.backgroundColor = getRandomColor();
    yearContainer.style.color = getRandomColor();
    setTimeout(changeColor, 1000); // Change color every 1 second
}

changeColor();

number4.addEventListener('transitionend', () => {
    numChangeColor();
});

numChangeColor();

function numChangeColor() {
    opacityValue = window.getComputedStyle(number4).getPropertyValue('opacity');
    if (opacityValue == 0) {
        number3.addEventListener('transitionend', () => {
            numbers.forEach((num) => {
                num.style.color = getRandomColor();
            });
        });
    } else {
        number3.removeEventListener('transitionend', () => {
            numbers.forEach((num) => {
                num.style.color = getRandomColor();
            });
        });
        numbers.forEach((num) => {
            num.style.transition = '0';
            num.style.color = '';
            num.style.transition = '';
        });
    }
}
