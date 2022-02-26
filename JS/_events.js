//IMPORTS
import { $d, $body } from "./_elements.js";
import { clickOnClock } from "./_clock.js";
import { clickOnChrono } from "./_stopwatch.js";
import { clickOnTimer } from "./_timer.js";
import { clickOnAlarm } from "./_alarm.js";
import { responsiveMedia } from "./_media-queries.js";

let hour = new Date().toLocaleTimeString();
const currentHour = Number.parseInt(hour);

console.log(currentHour);

//Function setting a specific background image depending on the hour
const checkingTime = () => {
  setInterval(() => {
    if (currentHour >= 7 && currentHour < 20) {
      $body.classList.remove("night-mode");
      $body.classList.add("day-mode");
    } else {
      $body.classList.add("night-mode");
      $body.classList.remove("day-mode");
    }
  }, 1000);
};

//EVENTS DELEGATION
$d.addEventListener("DOMContentLoaded", (e) => {
  checkingTime();
  clickOnClock();
  clickOnChrono();
  clickOnTimer();
  clickOnAlarm();
  responsiveMedia(
    "clock-btn",
    "Clock",
    `<img alt="clock" src="../Assets/clock-icon-navbar.png" class="image">`
  );
  responsiveMedia(
    "chrono-btn",
    "Stopwatch",
    `<img alt="stopwatch" src="../Assets/stopwatch-icon-navbar.png" class="image">`
  );
  responsiveMedia(
    "timer-btn",
    "Timer",
    `<img alt="timer" src="../Assets/timer-icon-navbar.png" class="image">`
  );
  responsiveMedia(
    "alarm-btn",
    "Alarm",
    `<img alt="alarm" src="../Assets/alarma-icon-navbar.png" class="image">`
  );
});
