const containerElement = document.querySelector('.container');

// console.log(innerWidth);

// create line element
const lines = () => {
    const randomWidth = Math.floor(Math.random() * 12);
    const randomLeft = Math.floor(Math.random() * innerWidth);

    const element = document.createElement('div');

    // add class to element
    element.setAttribute('class', 'circle');
    element.style.width = 2 + randomWidth + `px`;
    element.style.left = randomLeft + `px`;

    // add line element to container element
    containerElement.appendChild(element);

    // after 3s remove line element
    setTimeout(() => {
        element.remove();
    }, 5000);
};

// after 200ms delay, call lines function
setInterval(lines, 100);
