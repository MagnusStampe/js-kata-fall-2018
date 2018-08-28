document.addEventListener("DOMContentLoaded", loaded);

console.log("script.js");

function loaded() {
  setTimeout(loaded1s, 1000);
}

function loaded1s() {
  console.log("loaded");
  document.querySelector(".cookie").classList.add("pop_up");
  document.querySelector(".accept1").addEventListener("click", hidePopUp);
  document.querySelector(".accept2").addEventListener("click", hidePopUp);
}

function hidePopUp() {
  console.log("hidePopUp");
  document.querySelector(".cookie").classList.remove("pop_up");
}
