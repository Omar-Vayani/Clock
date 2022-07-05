const secTick = document.querySelector(".sec-tick");
const minTick = document.querySelector(".min-tick");
const hourTick = document.querySelector(".hr-tick");
const display = document.querySelector(".display");

// let sec = 0;
// function time() {
//   tick.style.transform = `translateY(-40%) rotate(${(sec * 360) / 60}deg)`;
//   sec++;
// }

setInterval(clock, 1000);

function clock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  display.innerHTML = `${hours}:${minutes}:${seconds}`;
  minTick.style.transform = `translate(-50%, -100%) rotate(${
    (minutes * 360) / 60
  }deg)`;
  hourTick.style.transform = `translate(-50%, -100%) rotate(${
    (hours * 360) / 12
  }deg)`;
  secTick.style.transform = `translate(-50%, -100%) rotate(${
    (seconds * 360) / 60
  }deg)`;
}
