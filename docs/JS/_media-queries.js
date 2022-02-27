import { $d, $navBar } from "./_elements.js";

export const responsiveMedia = (id, mobileContent, desktopContent) => {
  let breakpoint = window.matchMedia("(max-width: 650px)");

  const responsive = (e) => {
    if (e.matches) {
      $d.getElementById(id).innerHTML = desktopContent;
    } else {
      $d.getElementById(id).innerHTML = mobileContent;
    }
  };

  breakpoint.addListener(responsive);
  responsive(breakpoint);
};
