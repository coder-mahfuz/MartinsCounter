//necessary date-time
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
let presentDay = tempDate.getDay();

//run the timer
function countdownTimer() {
  const futureTime = +new Date(tempYear, tempMonth, tempDay, 17, 09, 00);
  const presentTime = +new Date();
  const difference = futureTime - presentTime;

  if (presentDay === 5 && difference <= 0) {
    tempDay += 3;
  } else if (difference <= 0) {
    tempDay++;
  } else(difference > 0)
  const hours = Math.floor(difference / (1000 * 60 * 60));
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  //format the UI
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  //Show the counter on UI
  document.getElementById('counter').innerHTML = `${format(hours)} : ${format(minutes)} : ${format(seconds)}`;

}

setInterval(countdownTimer, 1000);