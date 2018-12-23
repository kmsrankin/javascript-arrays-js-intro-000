var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles",
];

function addElementToBeginningOfArray(array, element) {
  return ["mound", ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return chocolateBars.push("poopbar")
}
