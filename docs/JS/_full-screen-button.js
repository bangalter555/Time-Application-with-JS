//IMPORTS
import { $d, $navBarContainer, $sectionCard } from "./_elements.js";

export const clickOnFullScreenButton = () => {
  $d.addEventListener("click", (e) => {
    let target = e.target;
    if (target.matches("#full-screen-btn")) {
      $navBarContainer.classList.toggle("hidden");
      $sectionCard.forEach((section) => {
        section.classList.toggle("section-card");
        section.classList.toggle("main");
        section.classList.toggle("section-card-full-screen");
      });
      $sectionCard[4].classList.toggle("alarm-card-display-full-screen");
      $sectionCard[4].classList.toggle("alarm-card-display");
    }
  });
};
