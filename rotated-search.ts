const findRotationPoint = (array: number[], left: number, right: number) => {
  const middle = Math.floor((left + right) / 2);

  if (array[middle - 1] > array[middle]) {
    return middle;
  }

  if (array[left] <= array[middle]) {
    return findRotationPoint(array, middle + 1, right);
  } else {
    return findRotationPoint(array, left, middle - 1);
  }
};

const search = (array: number[], target: number) => {
  const rotationPoint = findRotationPoint(array, 0, array.length - 1);

  const leftResult = searchRecursive(array, 0, rotationPoint, target);
  if (leftResult !== -1) {
    return leftResult;
  } else {
    return searchRecursive(array, rotationPoint, array.length - 1, target);
  }
};

const searchRecursive = (
  array: number[],
  left: number,
  right: number,
  target: number
): number => {
  if (left > right) {
    return -1;
  }

  const middle = Math.floor((left + right) / 2);

  if (array[middle] === target) {
    return middle;
  }

  if (array[middle] < target) {
    return searchRecursive(array, middle + 1, right, target);
  } else {
    return searchRecursive(array, left, middle - 1, target);
  }
};

const testArray = [9, 10, 1, 2, 9, 4, 5, 6, 7, 9];

console.log(findRotationPoint(testArray, 0, testArray.length - 1));

console.log(search(testArray, 5));
