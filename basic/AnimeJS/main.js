// import anime from './anime.min.js';

let isPlayed = false;

const animation = anime.timeline({
    autoplay: false,
    reverse: true,
});

const animationArr = [];

animation
    .add({
        targets: '.btn',
        top: '1500px',
        duration: 1000,
        easing: 'easeInOutSine',
    })
    .add({
        targets: '.img.img-star',
        top: '0',
        duration: 300,
        easing: 'easeInOutSine',
    })
    .add({
        targets: '.img.img-mountains_behind',
        bottom: '0',
        duration: 1000,
        easing: 'easeInOutSine',
    })
    .add({
        targets: '.img.img-moon',
        top: '0',
        duration: 1000,
        easing: 'easeInOutBack',
    })
    .add({
        targets: '.img.img-mountains_front',
        bottom: '0',
        duration: 1000,
        easing: 'easeInOutSine',
    })
    .add({
        targets: '.hero .text',
        marginRight: 0,
        duration: 1000,
        easing: 'easeInOutBack',
    })
    .add({
        targets: '.btn',
        top: '50%',
        duration: 1000,
        easing: 'easeInOutBack',
    });

animationArr.push(animation);

const playAnimeAnimation = function () {
    if (isPlayed) {
        animation.reverse();
        isPlayed = false;
        this.click();
    } else {
        animation.play();
        isPlayed = true;
    }
};

document.querySelector('.btn').addEventListener('click', playAnimeAnimation);
