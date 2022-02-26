//IMPORTS
import { $d, $navBar, $sections } from "./_elements.js";

const $fragment = document.createDocumentFragment();

//AUDIO
const $alarmForm = $d.querySelector(".set-alarm"),
  alarmList = $d.getElementById("alarm-list"),
  $alarm = document.createElement("audio");
$alarm.src = "../Assets/alarm-clock.mp3";
$alarm.volume = 1;
$alarm.loop = true;

let alarmTime, alarmTimeout;

//Arrays that will store the saved alarms
const alarmArray = [],
  count = 1;

//Function that plays an alarm ring when time is up
const alarmRinging = () => {
  $alarm.play();
  alert(`It's ${new Date().toLocaleTimeString()}. Wake Up!`);
};

//Function to set the correct time format
const timeFormatting = (time) => {
  if (time < 10 && time.length != 2) {
    return `0${time}`;
  }
  return time;
};

//Function to add alarm to alarm array and display it on page
const getAlarms = (alarmDisplayed, newAlarm) => {
  let $li = $d.createElement("li");
  $li.classList.add("time-list");
  $li.innerHTML = `<span class="alarm">${alarmDisplayed} </span>
  <button class="delete-alarm" id="delete-btn" value="${newAlarm}"> Delete Alarm </button>`;
  $fragment.appendChild($li);
  alarmList.appendChild($fragment);
};

//EVENT DELEGATION -SUBMIT
//Event to set a new alarm and save it
$d.addEventListener("submit", (e) => {
  let new_h = timeFormatting($alarmForm.hour.value);
  let new_m = timeFormatting($alarmForm.minutes.value);
  let pmOrAm;
  if (e.target === $alarmForm) {
    e.preventDefault();
    if (new_h === "0") {
      new_h = "00";
    }
    if (new_h > 12) {
      pmOrAm = "PM";
    } else pmOrAm = "AM";
    if (new_m === "0") {
      new_m = "00";
    }
  }
  //Creating a variable to display as a stored alarm
  let alarmComparedToTime = `${new_h}:${new_m} ${pmOrAm}`;
  //Creating a variable to compare with current time
  let newAlarm = `${new_h}:${new_m}:00`;

  if (isNaN(newAlarm)) {
    if (!alarmArray.includes(newAlarm)) {
      alarmArray.push(newAlarm);
      getAlarms(alarmComparedToTime, newAlarm);
      $alarmForm.reset();
      console.log(alarmArray);
    }
  } else {
    alert("The time is invalid");
  }
});

//FUNCTION TO RING THE ALARM WHEN TIME IS UP
const timeIsUp = () => {
  setInterval(() => {
    const today = new Date(),
      hours = timeFormatting(today.getHours()),
      minutes = timeFormatting(today.getMinutes()),
      seconds = timeFormatting(today.getSeconds()),
      now = `${hours}:${minutes}:${seconds}`;

    if (alarmArray.some((alarm) => alarm === now)) {
      alarmRinging();
    }
  }, 1000);
};

//EVENT DELEGATION - CLICKS
export const clickOnAlarm = () => {
  $d.addEventListener("click", (e) => {
    let target = e.target;
    e.stopPropagation();

    if (target.matches("#alarm-btn") || target.matches("#alarm-btn img")) {
      for (let i = 0; i < $navBar.length; i++) {
        if (i === 3) {
          $navBar[i].disabled = true;
        } else {
          $navBar[i].disabled = false;
        }

        for (let i = 0; i < $sections.length; i++) {
          if (i === 4) {
            $sections[i].classList.remove("hidden");
          } else {
            $sections[i].classList.add("hidden");
          }
        }
      }
    }

    if (target.matches("#delete-btn")) {
      if (target.classList.contains("delete-alarm")) {
        //Delete a particular alarm from display
        target.parentElement.remove();
        //remove an alarm from the array
        let newAlarmArray = alarmArray.filter((time) => time != target.value);
        alarmArray.length = 0;
        alarmArray.push.apply(alarmArray, newAlarmArray);

        console.log("new Array", newAlarmArray);
        console.log("alarm array", alarmArray);
      }
    }
    if (target.matches(".clear-alarm")) {
      $alarm.pause();
    }
  });

  timeIsUp();
};
