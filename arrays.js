var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles",
];

function addElementToBeginningOfArray(array, element) {
  return ["foo", ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return chocolateBars.push("foo")
}
