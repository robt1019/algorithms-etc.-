function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const minimalTree = (array, left, right) => {

  if (right < left) {
    return null;
  } else {
    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(array[mid]);
    node.right = minimalTree(array, mid + 1, right);
    node.left = minimalTree(array, left, mid - 1);
    return node;
  }
};

const testArray = [-10, -8, -3, 0, 1, 7, 10, 17, 19];
console.log(minimalTree(testArray, 0, testArray.length - 1));
