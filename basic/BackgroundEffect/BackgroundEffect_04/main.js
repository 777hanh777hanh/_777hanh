const allBubbles = document.querySelectorAll('.bubble');

allBubbles.forEach((bubble) => {
    bubble.style.setProperty('--i', Math.random() * 28 + 11);
});

const exploreBtn = document.getElementById('explore');
const contactBtn = document.getElementById('contact');
contactBtn.addEventListener('click', contactMe);

function contactMe() {
    const subject = encodeURIComponent('Hello 777hanh');
    const to = 'thanhthientran1511+contact@gmail.com';
    const content = encodeURIComponent('I want to contact you');

    const mailtoLink = `mailto:${to}?subject=${subject}&body=${content}`;

    window.open(mailtoLink);
}

exploreBtn.addEventListener('click', () => {
    // window.location.href = (`https://github.com/777hanh`);
    window.open(`https://github.com/777hanh777hanh`);
});
