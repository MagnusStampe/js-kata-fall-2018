"use strict";

function insertDigit(text, digit) {
  const digitLength = text.lastIndexOf("#") - text.indexOf("#") + 1;

  const newDigit = String(digit).padStart(digitLength, "0");

  const toRemove = text.slice(text.indexOf("#"), text.lastIndexOf("#") + 1);

  const newText = text.replace(toRemove, newDigit);

  console.log(newText);
}

insertDigit("familyPhoto###.jpg", 5);
insertDigit("familyPhoto#####.jpg", 10);
insertDigit("familyPhoto###.jpg", 144);
insertDigit("familyPhoto#.jpg", 7);
