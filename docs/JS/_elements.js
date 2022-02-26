/*ELEMENTS*/
const $d = document,
  $body = $d.querySelector(".body"),
  $main = $d.querySelector(".container"),
  $navBar = Array.from(document.querySelectorAll(".btn")),
  $sections = Array.from(document.querySelectorAll(".main")),
  $fragment = $d.createDocumentFragment();

//EXPORTS
export { $d, $fragment, $navBar, $main, $sections, $body };
