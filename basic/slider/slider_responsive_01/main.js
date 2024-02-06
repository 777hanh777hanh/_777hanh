const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

const slider = document.querySelector('.slider');

const arrImage = [
    {
        link: 'https://images.unsplash.com/photo-1534412638304-22e2df166c61?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        link: 'https://images.unsplash.com/photo-1512101176959-c557f3516787?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        link: 'https://images.unsplash.com/photo-1559551538-96c62c56b256?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        link: 'https://plus.unsplash.com/premium_photo-1661286630924-67454d00dc65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        link: 'https://images.unsplash.com/flagged/photo-1554397633-b360d3feac94?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        link: 'https://images.unsplash.com/photo-1704288899501-e788246200a6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

const slideFirstLoad = () => {
    const slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1]);
    const ImgSlides = document.querySelectorAll('.slides .img');
    ImgSlides.forEach((img, index) => {
        img.setAttribute('src', arrImage[index].link);
    });
};

slideFirstLoad();

nextBtn.addEventListener('click', () => {
    const slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
});

prevBtn.addEventListener('click', () => {
    const slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1]);
});
