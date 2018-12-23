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
  array.unshift(element) //not adding
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element) //not adding
  return array
}

function accessElementInArray(array, index) {
  return (array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift() //not removing
  return array
}

function removeElementFromBeginningOfArray(array, element) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop() //not removing
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
