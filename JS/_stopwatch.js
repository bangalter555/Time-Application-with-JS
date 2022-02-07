// //IMPORTS
import { $d, $main, $navBar, $sections } from "./_elements.js";

let stopWatchInterval,
  runningTime = 0;
const $stopwatch = $d.getElementById("stopwatch"),
  $playPauseButton = $d.getElementById("play-pause"),
  $stopButton = $d.getElementById("stop");

const calculateTime = (runningTime) => {
  const total_seconds = Math.floor(runningTime / 1000),
    total_minutes = Math.floor(total_seconds / 60),
    total_hours = Math.floor(total_minutes / 60),
    seconds_display = (total_seconds % 60).toString().padStart(2, "0"),
    minutes_display = total_minutes.toString().padStart(2, "0"),
    hours_display = total_hours.toString().padStart(2, "0");

  return `${hours_display}:${minutes_display}:${seconds_display}`;
};

const start = () => {
  let startTime = Date.now() - runningTime;
  stopWatchInterval = setInterval(() => {
    runningTime = Date.now() - startTime;
    $stopwatch.textContent = calculateTime(runningTime);
  }, 1000);
};
const pause = () => clearInterval(stopWatchInterval);

const stop = () => {
  $playPauseButton.classList.remove("running");
  runningTime = 0;
  clearInterval(stopWatchInterval);
  $stopwatch.textContent = `00:00:00`;
};

export const clickOnChrono = () => {
  $d.addEventListener("click", (e) => {
    e.stopPropagation();
    let target = e.target;

    if (target.matches("#chrono-btn") || target.matches("#chrono-btn img")) {
      for (let i = 0; i < $navBar.length; i++) {
        if (i === 1) {
          $navBar[i].disabled = true;
        } else {
          $navBar[i].disabled = false;
        }

        for (let i = 0; i < $sections.length; i++) {
          if (i === 2) {
            $sections[i].classList.remove("hidden");
          } else {
            $sections[i].classList.add("hidden");
          }
        }
      }
    }
    if (target === $playPauseButton) {
      if (!$playPauseButton.classList.contains("running")) {
        $playPauseButton.classList.add("running");
        start();
      } else {
        $playPauseButton.classList.remove("running");
        pause();
      }
    }
    if (target === $stopButton) stop();
  });
};
