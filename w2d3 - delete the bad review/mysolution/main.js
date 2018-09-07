"use strict";

function removeElement(element) {
  console.log(element.textContent);

  //if first letter is bellow or equal to 5 and second letter is not 0 (would be 10 then), remove it
  if (element.textContent[0] <= 5 && element.textContent[1] != "0") {
    element.remove();
    console.log("remove: " + element.textContent);
  }
}

const reviews = document.querySelector("body");

findReviews("ul li");

// TODO: Create listMethods function

function findReviews(section) {
  const ulContent = document.querySelectorAll(section);

  console.log("###reviews###");

  ulContent.forEach(removeElement);

  console.log("--end of table--");
}
