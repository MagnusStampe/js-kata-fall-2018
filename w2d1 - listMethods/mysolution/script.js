"use strict";

function displayElement(element) {
  console.log(element.textContent);
}

listMethods("info");
listMethods("modify");
listMethods("newarray");

// TODO: Create listMethods function

function listMethods(section) {
  const ulContent = document.querySelectorAll("#" + section + " ul li");

  console.log("###for###");
  for (let i = 0; i <= ulContent.length - 1; i++) {
    displayElement(ulContent[i]);
  }

  console.log("###forEach###");

  ulContent.forEach(displayElement);

  console.log("--end of table--");
}
