//IMPORTS
import { $d } from "./_elements.js";
import { clickOnClock } from "./_clock.js";
import { clickOnChrono } from "./_stopwatch.js";
import { clickOnTimer } from "./_timer.js";
import { clickOnAlarm } from "./_alarm.js";
import { responsiveMedia } from "./_media-queries.js";

//EVENTS DELEGATION
$d.addEventListener("DOMContentLoaded", (e) => {
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
