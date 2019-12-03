function swap(arr: number[], left: number, right: number) {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

function partition(arr: number[], left: number, right: number): number {
  // this can be chosen however you want
  const pivot = arr[left + (right - left) / 2];

  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  return left;
}

function quickSort(arr: number[], left: number, right: number) {
    const index = partition(arr, left, right);

    if(left < index - 1) {
        quickSort(arr, left, index - 1);
    }

    if(index < right) {
        quickSort(arr, right, index - 1);
    }
}

const testArray = [3,1,3,5,1,3,4,33,5,0,6,13,213];

quickSort(testArray, 0, testArray.length - 1);

console.log(testArray);
