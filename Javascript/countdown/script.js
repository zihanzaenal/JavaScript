const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hour');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const countdown = "1 Jan 2022";

function countdownApp() {
    const countdownDate = new Date(countdown);
    const currentDate = new Date();
  
    const totalseconds = (countdownDate - currentDate) / 1000;
  
    const days = Math.floor(totalseconds / 3600 / 24);
    const hour = Math.floor(totalseconds / 3600) % 24;
    const mins = Math.floor(totalseconds / 60) %60;
    const seconds = Math.floor(totalseconds) % 60;
  
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hour);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
  }

  function formatTime(time) {
    return time < 10? `0${time}` : time;
  }

countdownApp();

setInterval(countdownApp, 1000);