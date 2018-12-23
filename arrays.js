var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles",
];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element) //not adding
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element) //not adding
}

function accessElementInArray(array, index) {
  return (array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift() //not removing
}

function removeElementFromBeginningOfArray(array, element) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}
