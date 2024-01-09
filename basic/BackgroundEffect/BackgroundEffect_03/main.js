const containerElement = document.querySelector('.container');
console.log(containerElement);

const stripes = () => {
    const element = document.createElement('div');
    element.setAttribute('class', 'line');

    element.style.left = Math.round(Math.random() * innerWidth) + 'px';
    element.style.width = 2 + Math.round(Math.random() * 3) + 'px';
    element.style.backgroundColor = `hsl(${Math.floor(Math.random() * 45)}deg, 100%, 50%)`;

    containerElement.appendChild(element);

    setTimeout(() => element.remove(), 500);
};

const randomCreateElement = () => {
    setInterval(stripes, 10);
};

randomCreateElement();
