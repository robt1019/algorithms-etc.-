
function swap(array: number[], indexA: number, indexB: number) {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
}

// left and right define the section of the array we are looking at.
// This is the section of the array that this iteration of the program is tasked
// with finding the position of an element within
function partition(array: number[], left: number, right: number): number {
  // pick a 'pivot' - or in English 'an element we want to put in the right place within the array
  const pivot = array[right];

  // now in order to put it in the right place, we have to put anything smaller than it on the left of it, and anything bigger than it on the right
  // we need two pointers, one (i) to keep track of the pile of items smaller than the pivot, and one (j) to look through the array and check elements

  let i = left - 1;

  for (let j = left; j < right; j++) {

    if(array[j] <= pivot) {
      // we have found an element smaller than or equal to the pivot. So it needs to go on the pile of smaller elements.
      // increment pile pointer (sounds delightful) so we know where to put the element.
      // because we have already processed all the elemnts to the left, we know that swapping the elements will
      // ensure that the elements to the left of i are smaller.
      i++;
      swap(array, i, j);
    }
  }

  // put our pivot in the right place by swapping it with the element above our pile of smaller elements
  swap (array, i+1, right);

  // when we're all done, i+1 is where our pivot element is
  return i+1;
}

function quickSort(array: number[], left: number, right: number) {

  if(left >= right) {
    return;
  }

  const pivotRestPoint = partition(array, left, right);

  quickSort(array, left, pivotRestPoint - 1);
  quickSort(array, pivotRestPoint + 1, right);

}

const testArray = [
  7,
  8,
  3,
  4,
  5,
  1,
  4,
  5,
  9,
  11,
  4,
  4,
  4,
  5,
  6,
  67,
  13,
  41,
  32,
  67,
  355,
  3
];

const simpleArray = [5, 3, 7, 9, 1, 4];

quickSort(simpleArray, 0, simpleArray.length - 1);
console.log(simpleArray);
