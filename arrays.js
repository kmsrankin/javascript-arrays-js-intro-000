var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles",
];

function addElementToBeginningOfArray(array = chocolateBars, element = "mound") {
  return [element, ...array]
}
