//IMPORTS
import { $d } from "./_elements.js";
import { clickOnClock } from "./_clock.js";
import { clickOnChrono } from "./_stopwatch.js";
import { clickOnTimer } from "./_timer.js";
import { clickOnAlarm } from "./_alarm.js";

//EVENTS DELEGATION
$d.addEventListener("DOMContentLoaded", (e) => {
  clickOnClock();
  clickOnChrono();
  clickOnTimer();
  clickOnAlarm();
});
