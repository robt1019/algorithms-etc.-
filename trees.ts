class TreeNode {
  public name: string;
  public children: TreeNode[];

  constructor(name: string) {
    this.name = name;
  }
}

const head = new TreeNode("first");

head.children = [
  new TreeNode("second"),
  new TreeNode("third"),
  new TreeNode("fourth")
];
head.children[1].children = [new TreeNode("fifth")];

// console.log(head);

class ListNode<T> {
  public data: T;
  public prev: ListNode<T>;

  constructor(data: T) {
    this.data = data;
  }
}

class Queue<T> {
  private tail: ListNode<T>;

  public queue(item: T) {
    if (this.tail) {
      const temp = this.tail;
      this.tail = new ListNode(item);
      this.tail.prev = temp;
    } else {
      this.tail = new ListNode(item);
    }
  }

  public deQueue(): T {
    if (this.tail) {
      const temp = this.tail;
      this.tail = temp.prev;
      return temp.data;
    }
  }

  public peek(): ListNode<T> {
    return this.tail;
  }
}

class BinaryTreeNode {
  public data: number;
  public left?: BinaryTreeNode;
  public right?: BinaryTreeNode;

  constructor(data: number) {
    this.data = data;
  }
}

function insert(node: BinaryTreeNode, data: number) {
  if (data <= node.data) {
    if (!node.left) {
      node.left = new BinaryTreeNode(data);
    } else {
      insert(node.left, data);
    }
  } else {
    if (!node.right) {
      node.right = new BinaryTreeNode(data);
    } else {
      insert(node.right, data);
    }
  }
}

function inOrder(
  node: BinaryTreeNode,
  callback: (node: BinaryTreeNode) => any
) {
  if (node) {
    inOrder(node.left, callback);
    callback(node);
    inOrder(node.right, callback);
  }
}

function postOrder(
  node: BinaryTreeNode,
  callback: (node: BinaryTreeNode) => any
) {
  if (node) {
    inOrder(node.left, callback);
    inOrder(node.right, callback);
    callback(node);
  }
}

function preOrder(
  node: BinaryTreeNode,
  callback: (node: BinaryTreeNode) => any
) {
  if (node) {
    callback(node);
    inOrder(node.left, callback);
    inOrder(node.right, callback);
  }
}

function depthFirstSearch(node: BinaryTreeNode, data: number) {
  if (data === node.data) {
    return node;
  }

  if (data <= node.data) {
    return depthFirstSearch(node.left, data);
  }

  return depthFirstSearch(node.right, data);
}

function breadthFirstSearch(node: BinaryTreeNode, data: number) {
  const queue = new Queue<BinaryTreeNode>();

  queue.queue(node);

  while (queue.peek()) {
    const nodeToProcess = queue.deQueue();
    if (nodeToProcess.data === data) {
      return nodeToProcess;
    }
    queue.queue(nodeToProcess.left);
    queue.queue(nodeToProcess.right);
  }
}

const head1 = new BinaryTreeNode(7);

insert(head1, 6);
insert(head1, 13);
insert(head1, 4);
insert(head1, 9);
insert(head1, 15);
insert(head1, 35);
insert(head1, 100);
insert(head1, 23);
insert(head1, 3);
insert(head1, 22000);

inOrder(head1, (node: BinaryTreeNode) => console.log(node.data));
console.log();
// preOrder(head1, (node: BinaryTreeNode) => console.log(node.data));
// console.log();
// postOrder(head1, (node: BinaryTreeNode) => console.log(node.data));
// console.log();

console.log(depthFirstSearch(head1, 13));
console.log(breadthFirstSearch(head1, 13));
