/*ELEMENTS*/
const $d = document,
  $body = $d.querySelector(".body"),
  $main = $d.querySelector(".container"),
  $navBarContainer = $d.querySelector(".nav-bar"),
  $navBar = Array.from(document.querySelectorAll(".btn")),
  $sections = Array.from(document.querySelectorAll(".main")),
  $fragment = $d.createDocumentFragment(),
  $sectionCard = Array.from($d.querySelectorAll(".section-card"));

//EXPORTS
export {
  $d,
  $fragment,
  $navBarContainer,
  $navBar,
  $main,
  $sections,
  $body,
  $sectionCard,
};
