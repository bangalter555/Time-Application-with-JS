//IMPORTS
import { $d, $navBar, $sections } from "./_elements.js";

let clockHour;

export const clickOnClock = () => {
  $d.addEventListener("click", (e) => {
    let target = e.target;
    e.stopPropagation();

    if (target.matches("#clock-btn")) {
      console.log($navBar, $sections);
      for (let i = 0; i < $navBar.length; i++) {
        if (i === 0) {
          $navBar[i].disabled = true;
        } else {
          $navBar[i].disabled = false;
        }

        for (let i = 0; i < $sections.length; i++) {
          if (i === 1) {
            $sections[i].classList.remove("hidden");
          } else {
            $sections[i].classList.add("hidden");
          }
        }
      }
    }

    if (target.matches("#show-btn")) {
      clockHour = setInterval(() => {
        let hour = new Date().toLocaleTimeString();
        $d.getElementById("clock").innerHTML = `${hour}`;
      }, 1000);
      $d.querySelector("#clock").classList.toggle("clock-showed");
      $d.querySelector("#show-btn").classList.toggle("hidden");
      $d.querySelector("#close-btn").classList.toggle("hidden");
    }
    if (target.matches("#close-btn")) {
      clearInterval(clockHour);
      $d.querySelector("#clock").innerHTML = null;
      $d.querySelector("#clock").classList.toggle("clock-showed");
      $d.querySelector("#show-btn").classList.toggle("hidden");
      $d.querySelector("#close-btn").classList.toggle("hidden");
    }
  });
};
