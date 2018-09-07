const people = [
  "celeb",
  "peasant",
  "peasant",
  "peasant",
  "celeb",
  "peasant",
  "peasant",
  "peasant",
  "peasant",
  "celeb",
  "peasant",
  "peasant"
];

let searchWord;
let currentPos = 0;

const foundPeople = [];

function init() {
  //Find the celebrities amongst the common peasants
  searchWord = "celeb";

  //Call function [1] array to search in, [2] array to put indexes in, [3] word to search for
  findInArray(people, foundPeople, searchWord);

  //console log the array with indexes of the searchword
  console.log("Celebrities are at indexes: " + foundPeople);
}

function findInArray(array, arrayIndex, search) {
  //if position is not at last "search word" + 1 (+1 so that the last is included)
  if (currentPos != array.lastIndexOf(search) + 1) {
    //push index into array
    arrayIndex.push(array.indexOf(search, currentPos));

    //set current position to after found word
    currentPos = array.indexOf(search, currentPos) + 1;

    //loop
    findInArray(array, arrayIndex, search);
  }
}

init();
