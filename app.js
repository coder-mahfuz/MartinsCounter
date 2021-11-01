const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const counter = document.getElementById('counter');


//necessary date-time
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
let presentDay = tempDate.getDay();

const weekday = weekdays[presentDay];
console.log(weekday);

//run the timer
function countdownTimer() {
  const futureTime = +new Date(tempYear, tempMonth, tempDay, 12, 30, 00);
  const presentTime = +new Date();
  const difference = futureTime - presentTime;

  if (difference <= 0) {
    tempDay++;
  }

  if (weekday === "Friday" && difference <= 0) {
    tempDay *= 3;
  }

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    //Show the counter on UI
    counter.innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;
  }
}

countdownTimer();
setInterval(countdownTimer, 1000);