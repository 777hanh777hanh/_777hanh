const banner = document.querySelector('.banner');
const menuToggle = document.querySelector('.toggle');
const btnHire = document.querySelector('.btn__hire');

const handleClick = () => {
    banner.classList.toggle('active');
    menuToggle.classList.toggle('active');
};
menuToggle.addEventListener('click', handleClick);

const sendLetterToHireMe = () => {
    const object = encodeURIComponent('Hire 777hanh');
    const to = 'thanhthientran1511+hire@gmail.com';
    const body = encodeURIComponent('I want to Hire you!');

    const mailToLink = `mailto:${to}?subject=${object}&body=${body}`;

    window.open(mailToLink, '_blank');
};
btnHire.addEventListener('click', sendLetterToHireMe);
