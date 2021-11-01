const counter = document.getElementById('counter');


//necessary date-time
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
let presentDay = tempDate.getDay();


//run the timer
function countdownTimer() {
  const futureTime = +new Date(tempYear, tempMonth, tempDay, 12, 30, 00);
  const presentTime = +new Date();
  const difference = futureTime - presentTime;

  if (difference <= 0) {
    tempDay++;
  } else if (presentDay === 5) {
    var hours = 71;
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    //Show the counter on UI
    counter.innerHTML = `${hours} : ${minutes} : ${seconds}`;
  } else {
    var hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    //Show the counter on UI
    counter.innerHTML = `${hours} : ${minutes} : ${seconds}`;
  }

}

countdownTimer();
setInterval(countdownTimer, 1000);