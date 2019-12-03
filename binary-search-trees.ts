class BinaryTreeNode {
  data: number;
  left?: BinaryTreeNode;
  right?: BinaryTreeNode;

  constructor(data: number) {
    this.data = data;
  }

  public delete(value: number) {
    if (value <= this.data) {
      if (this.left.data === value) {
        delete this.left;
      } else {
        this.left.delete(value);
      }
    } else {
      if (this.right.data === value) {
        delete this.right;
      } else {
        this.right.delete(value);
      }
    }
  }

  public insert(value: number) {
    if (value <= this.data) {
      if (!this.left) {
        this.left = new BinaryTreeNode(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BinaryTreeNode(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  public print() {
    if (this.left) {
      this.left.print();
    }

    console.log(this.data);

    if (this.right) {
      this.right.print();
    }
  }
}

class BinarySearchTree {
  private root?: BinaryTreeNode;

  public insert(data: number) {
    if (!this.root) {
      this.root = new BinaryTreeNode(data);
    } else {
      this.root.insert(data);
    }
  }

  public delete(data: number) {
    this.root.delete(data);
  }

  public print() {
    this.root.print();
  }
}

const list = new BinarySearchTree();

list.insert(2);
list.insert(4);
list.insert(1);
list.insert(3);

list.print();

list.delete(4);

list.print();
