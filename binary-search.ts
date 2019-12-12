class TreeNode {
  data: number;
  left: TreeNode;
  right: TreeNode;

  constructor(data: number) {
    this.data = data;
  }
}

function insert(node: TreeNode, data: number) {
  if (data <= node.data) {
    if (node.left) {
      insert(node.left, data);
    } else {
      node.left = new TreeNode(data);
    }
  } else {
    if (node.right) {
      insert(node.right, data);
    } else {
      node.right = new TreeNode(data);
    }
  }
}

function inOrderTraversal(node: TreeNode, callBack: (node: TreeNode) => any) {
  if (!node) {
    return;
  }
  inOrderTraversal(node.left, callBack);
  callBack(node);
  inOrderTraversal(node.right, callBack);
}

function preOrderTraversal(node: TreeNode, callBack: (node: TreeNode) => any) {
  if (!node) {
    return;
  }
  callBack(node);
  inOrderTraversal(node.left, callBack);
  inOrderTraversal(node.right, callBack);
}

function postOrderTraversal(node: TreeNode, callBack: (node: TreeNode) => any) {
  if (!node) {
    return;
  }
  inOrderTraversal(node.left, callBack);
  inOrderTraversal(node.right, callBack);
  callBack(node);
}

function makeRandomTree(size: number, maxNumber: number): TreeNode {
  const tree = new TreeNode(Math.floor(Math.random() * maxNumber));

  for (let i = 0; i < size; i++) {
    insert(tree, Math.floor(Math.random() * maxNumber));
  }

  return tree;
}

function swap(array: number[], left: number, right: number) {
  const temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

function partition(array: number[], left: number, right: number): number {
  const pivot = array[right];

  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (array[j] <= pivot) {
      i++;
      swap(array, i, j);
    }
  }
  swap(array, i+1, right);

  return i + 1;
}

function quickSort(array: number[], left: number, right: number) {

    if(left >= right) {
        return;
    }

    const pivotRestPoint = partition(array, left, right);

    quickSort(array, left, pivotRestPoint - 1);
    quickSort(array, pivotRestPoint + 1, right);
}

function sort(array: any[]) {
    quickSort(array, 0, array.length - 1);
}

function makeRandomNumberArray(size: number, maxElementSize: number): number[] {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * maxElementSize));
  }

  return array;
}

function binarySearch(
  searchTarget: number,
  array: number[],
  left: number,
  right: number
) {
  if (left >= right) {
    return `array does not contain ${searchTarget}`;
  }

  const middle = Math.floor((right + left) / 2);

  if (array[middle] === searchTarget) {
    return `found ${searchTarget} at element ${left + middle}`;
  } else if (searchTarget < array[middle]) {
    console.log("first half");
    return binarySearch(searchTarget, array, left, middle - 1);
  } else {
    console.log("second half");
    return binarySearch(searchTarget, array, middle + 1, right);
  }
}

const testArray = makeRandomNumberArray(100000, 1000);
sort(testArray);
console.log(testArray);
console.log(binarySearch(5, testArray, 0, testArray.length - 1));

const testTree = makeRandomTree(50, 1000);
inOrderTraversal(testTree, node => console.log(node.data));
