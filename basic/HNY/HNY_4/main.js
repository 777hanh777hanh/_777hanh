const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const dd = document.getElementById('dd');
const hh = document.getElementById('hh');
const mm = document.getElementById('mm');
const ss = document.getElementById('ss');

const dayDots = document.querySelector('.dot-day');
const hrDots = document.querySelector('.hr-dot');
const minDots = document.querySelector('.min-dot');
const secDots = document.querySelector('.sec-dot');

// total Length of the path
const totalLength = customRound(dd.getTotalLength());

// custom round number
// 4.1  => 5
// 4.01 => 4
function customRound(number) {
    const decimalPart = number % 1;
    if (decimalPart >= 0.1) {
        return Math.ceil(number);
    } else {
        return Math.floor(number);
    }
}

// count down

// mm/dd/yyyy hh:mm:ss
let endDay = '1/1/2024 17:27:00';
let x = setInterval(function () {
    let targetDate = new Date(endDay).getTime();
    let now = new Date();
    let currentDate = now.getTime();

    let distance = targetDate - currentDate;

    // calculate days, hours, minutes, seconds
    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);

    days.innerHTML = d + ` <span>${d > 1 ? `Days` : `Day`}</span>`;
    hours.innerHTML = h + ` <span>${h > 1 ? `Hours` : `Hour`}</span>`;
    minutes.innerHTML = m + ` <span>${m > 1 ? `Minutes` : `Minute`}</span>`;
    seconds.innerHTML = s + ` <span>${s > 1 ? `Seconds` : `Second`}</span>`;

    let isLeapYear = false;
    if (now.getFullYear() % 4 === 0 || now.getFullYear() % 400 === 0) {
        isLeapYear = true;
    }
    // animate stroke
    dd.style.strokeDashoffset = totalLength - (totalLength * d) / (isLeapYear ? 366 : 365);
    hh.style.strokeDashoffset = totalLength - (totalLength * h) / 24;
    mm.style.strokeDashoffset = totalLength - (totalLength * m) / 60;
    ss.style.strokeDashoffset = totalLength - (s * totalLength) / 60;

    // animate dots

    // 360deg / 365 days = 0.9863deg/day or 360deg / 366 days
    dayDots.style.transform = `rotateZ(${d * (360 / (isLeapYear ? 366 : 365))}deg)`;
    hrDots.style.transform = `rotateZ(${h * (360 / 24)}deg)`;
    minDots.style.transform = `rotateZ(${m * (360 / 60)}deg)`;
    secDots.style.transform = `rotateZ(${s * (360 / 60)}deg)`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('time').style.opacity = '0';
        document.getElementById('time').style.visibility = 'hidden';
        document.querySelector('.text').style.visibility = 'visible';
        document.querySelector('.text').style.opacity = '1';
    }
}, 1000);
