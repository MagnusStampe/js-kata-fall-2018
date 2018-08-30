"use strict";

document.querySelector("DOMContentLoaded", hideModal);

function showModal() {
  console.log("Show modal");
  document.querySelector("#modal_container").style = "display:flex";
}

function hideModal() {
  console.log("Hide modal");
  document.querySelector("#modal_container").style = "display:none";
}

document.querySelector(".but1").addEventListener("click", showModal);
document.querySelector(".but2").addEventListener("click", showModal);
document.querySelector(".but3").addEventListener("click", showModal);
document.querySelector(".but5").addEventListener("click", showModal);
document.querySelector(".but6").addEventListener("click", showModal);

document.querySelector("#closebutton").addEventListener("click", hideModal);
