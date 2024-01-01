const h2Element = document.querySelector('h2');
const container = document.querySelector('.container');

h2Element.addEventListener('click', handleClick);

function handleClick(e) {
    container.classList.toggle('new-year');
    this.classList.toggle('active');
}
