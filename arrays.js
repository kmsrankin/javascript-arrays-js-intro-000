var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles",
];

function addElementToBeginningOfArray(array, element) {
  ["foo", ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  chocolateBars.unshift("foo")
}
