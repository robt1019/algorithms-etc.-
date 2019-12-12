function merge(arr1: number[], arr2: number[]) {
  const merged = [];

  while(arr1.length && arr2.length) {
    if(arr1[0] < arr2[0]) {
      merged.push(arr1.shift());
    } else {
      merged.push(arr2.shift());
    }
  }

  return merged.concat(arr1).concat(arr2);
}

function mergeSort(array: number[]) {
  if(array.length <= 1) {
    return array;
  } else {
    const middle = Math.floor(array.length / 2);
    const firstHalf = array.slice(0, middle);
    const secondHalf = array.slice(middle);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}

const testArray = [8, 3, 2, 1, 3, 4, 5, 6, 7, 8];

console.log(mergeSort(testArray));
