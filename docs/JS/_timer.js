// //IMPORTS
import { $d, $navBar, $sections } from "./_elements.js";

const $playTimerPauseButton = $d.getElementById("play-pause-timer"),
  $timerForm = $d.querySelector(".timer"),
  $stopTimerButton = $d.getElementById("stop-timer");
let hour = $d.getElementById("hours"),
  minutes = $d.getElementById("minutes"),
  seconds = $d.getElementById("seconds"),
  startTimer;

//AUDIO
const $timerAlarm = document.createElement("audio");
$timerAlarm.src = "../Assets/alarma-de-incendios.mp3";
$timerAlarm.volume = 1;
$timerAlarm.loop = true;
$timerForm.insertAdjacentElement("afterend", $timerAlarm);

const start = () => {
  if (hour.value == 0 && minutes.value == 0 && seconds.value == 0) {
    clearInterval(startTimer);
    $timerAlarm.play();
    alert(`Time is up!`);
  } else if (seconds.value != 0) seconds.value--;
  else if (minutes.value != 0 && seconds.value == 0) {
    seconds.value = 59;
    minutes.value--;
  } else if (hour.value != 0 && minutes.value == 0 && seconds.value == 0) {
    hour.value--;
    minutes.value = 59;
    seconds.value = 59;
  } else {
    alert("Invalid values");
  }
};

const pause = () => {
  clearInterval(startTimer);
  $timerAlarm.pause();
  $timerAlarm.currentTime = 0;
};

const stop = () => {
  $playTimerPauseButton.classList.remove("running");
  clearInterval(startTimer);
  $timerAlarm.pause();
  $timerAlarm.currentTime = 0;
  hour.value = 0;
  minutes.value = 0;
  seconds.value = 0;
};

//EVENT DELEGATION - KEY UP
$d.addEventListener("keyup", (e) => {
  if (e.target.matches(".timer-input")) {
    if (hour.value.length > 2 || hour.value.length < 0) {
      alert("Invalid number of hours");
    }
    if (minutes.value > 59 || minutes.value < 0) {
      alert("Invalid number of minutes");
    }
    if (seconds.value > 59 || seconds.value < 0) {
      alert("Invalud number of seconds");
    }
  }
});

//EVENT DELEGATION -CLICKS
export const clickOnTimer = () => {
  $d.addEventListener("click", (e) => {
    let target = e.target;
    e.stopPropagation();

    if (target.matches("#timer-btn") || target.matches("#timer-btn img")) {
      for (let i = 0; i < $navBar.length; i++) {
        if (i === 2) {
          $navBar[i].disabled = true;
        } else {
          $navBar[i].disabled = false;
        }

        for (let i = 0; i < $sections.length; i++) {
          if (i === 3) {
            $sections[i].classList.remove("hidden");
          } else {
            $sections[i].classList.add("hidden");
          }
        }
      }
    }

    if (target === $playTimerPauseButton) {
      if (!$playTimerPauseButton.classList.contains("running")) {
        $playTimerPauseButton.classList.add("running");
        startTimer = setInterval(() => {
          start();
        }, 1000);
      } else {
        $playTimerPauseButton.classList.remove("running");
        pause();
      }
    }
    if (target === $stopTimerButton) stop();
  });
};
