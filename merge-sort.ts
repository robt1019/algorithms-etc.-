const merge = (arr1: number[], arr2: number[]) => {

  const merged = [];

  while(arr1.length && arr2.length) {
    if(arr1[0] < arr2[0]) {
      merged.push(arr1.shift());
    } else {
      merged.push(arr2.shift());
    }
  }

  return [...merged, ...arr1, ...arr2];
};

const mergeSort = (array: number[]): number[] => {
  if (array.length <= 1) {
    return array;
  }

  const midPoint = Math.floor(array.length / 2);

  const firstHalf = mergeSort(array.slice(0, midPoint));
  const secondHalf = mergeSort(array.slice(midPoint));
  return merge(firstHalf, secondHalf);
};

const testArray = [8, 3, 2, 1, 3, 4, 5, 6, 7, 8];

console.log(mergeSort(testArray));
