var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles",
];

function addElementToBeginningOfArray(array, element) {
  array = chocolateBars;
  element = "mound";
  return [${element}, ${ ...array}]
}

function destructivelyAddElementToBeginningOfArray(array = chocolateBars, element = "poopbar") {
  return array.unshift(element)
}
