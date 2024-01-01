const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const days = $('#days');
const hours = $('#hours');
const minutes = $('#minutes');
const seconds = $('#seconds');

const dd = $('#dd');
const hh = $('#hh');
const mm = $('#mm');
const ss = $('#ss');

const totalLength = dd.getTotalLength();

// mm/dd/yyyy hh:mm:ss
let targetDate = `1/1/2024 19:28:00`;

let timerId = setInterval(() => {
    const currentDate = new Date();

    const targetTime = new Date(targetDate).getTime();
    const currentTime = currentDate.getTime();

    const distance = targetTime - currentTime;

    // calculate days, hours, minutes, seconds
    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);

    // render
    days.innerHTML = (d > 0 ? d : 0) + ` <br /><span>${d > 1 ? `Days` : `Day`}</span>`;
    hours.innerHTML = (h > 0 ? h : 0) + ` <br /><span>${h > 1 ? `Hours` : `Hour`}</span>`;
    minutes.innerHTML = (m > 0 ? m : 0) + ` <br /><span>${m > 1 ? `Minute` : `Minute`}</span>`;
    seconds.innerHTML = (s > 0 ? s : 0) + ` <br /><span>${s > 1 ? `Seconds` : `Second`}</span>`;

    // animate stroke
    const dayStrokeLength = totalLength - (totalLength * d) / 365;
    const hourStrokeLength = totalLength - (totalLength * h) / 24;
    const minuteStrokeLength = totalLength - (totalLength * m) / 60;
    const secondStrokeLength = totalLength - (totalLength * s) / 60;

    if (dayStrokeLength > 0) {
        dd.style.transition = '';
        dd.style.strokeDashoffset = dayStrokeLength;
    } else {
        dd.style.transition = 'stroke-dashoffset 0s linear';
        dd.style.strokeDashoffset = 0;
    }

    if (hourStrokeLength > 0) {
        hh.style.transition = '';
        hh.style.strokeDashoffset = hourStrokeLength;
    } else {
        hh.style.transition = 'stroke-dashoffset 0s linear';
        hh.style.strokeDashoffset = 0;
    }

    if (minuteStrokeLength > 0) {
        mm.style.transition = '';
        mm.style.strokeDashoffset = minuteStrokeLength;
    } else {
        mm.style.transition = 'stroke-dashoffset 0s linear';
        mm.style.strokeDashoffset = 0;
    }

    if (secondStrokeLength < totalLength) {
        ss.style.transition = '';
        ss.style.strokeDashoffset = secondStrokeLength;
    } else {
        ss.style.transition = 'stroke-dashoffset 0s linear';
        ss.style.strokeDashoffset = 0;
    }

    // clear the setInterval if countdown is over
    if (distance < 0) {
        clearInterval(timerId);

        // hide the countdown
        $('#time').style.opacity = '0';
        $('#time').style.visibility = 'hidden';

        // Show the Welcome message
        $('.newYear').style.opacity = '1';
        $('.newYear').style.visibility = 'visible';
    }
}, 1000);

// set target date
targetDate = nextYearSet();

function nextYearSet() {
    const newDate = $('#targetDate');
    newDate.disabled = true;

    let nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    nextYear.setMonth(0, 1);
    nextYear.setHours(0, 0, 0);

    let day = nextYear.getDate(),
        month = nextYear.getMonth() + 1,
        year = nextYear.getFullYear(),
        hour = nextYear.getHours(),
        min = nextYear.getMinutes();

    month = (month < 10 ? '0' : '') + month;
    day = (day < 10 ? '0' : '') + day;
    hour = (hour < 10 ? '0' : '') + hour;
    min = (min < 10 ? '0' : '') + min;

    const date = month + '-' + day + '-' + year,
        displayTime = hour + ':' + min;

    const formattedDate = nextYear;
    formattedDate.setMinutes(formattedDate.getMinutes() - formattedDate.getTimezoneOffset());
    newDate.value = formattedDate.toISOString().slice(0, 16);

    return date + ' ' + displayTime;
}
