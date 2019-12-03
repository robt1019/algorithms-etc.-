class ListNode {
  public next?: ListNode;
  public data?: number;

  constructor(data: number) {
    this.data = data;
  }

  public addNode(data: number) {
    let n: ListNode = this;
    while (n.next) {
      n = n.next;
    }
    n.next = new ListNode(data);
  }
}

const moretestNode = new ListNode(1);
moretestNode.addNode(2);
moretestNode.addNode(3);
moretestNode.addNode(4);

const getLoopingNode = (node: ListNode) => {
  const nodes = [];

  while (node) {
    if (nodes.find(nodeToCheck => nodeToCheck === node)) {
      return node;
    } else {
      nodes.push(node);
    }
    node = node.next;
  }
};

const removeDupes = (node: ListNode): ListNode => {
  const values = {};
  const head = node;

  while (node && node.next) {
    values[node.data] = true;
    if (values[node.next.data]) {
      node.next = node.next.next;
    }
    node = node.next;
  }

  return head;
};

const testData = [[1, 2, 3, 4, 5], [3, 3, 5, 2, 1], [11, 432, 2, 1, 11]];

testData.forEach(data => {
  let testLinkedList: ListNode;

  data.forEach(item => {
    if (testLinkedList) {
      testLinkedList.addNode(item);
    } else {
      testLinkedList = new ListNode(item);
    }
  });

  console.log(removeDupes(testLinkedList));
});
