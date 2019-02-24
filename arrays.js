chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(arr, array_element) {
  return [array_element, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, array_element) {
  arr.unshift(array_element);
  return arr;
}
