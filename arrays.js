chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(arr, array_element) {
  return arr.unshift(array_element);
}

function destructivelyAddElementToBeginningOfArray(arr, array_element) {
  return [array_element, ...arr];
}
