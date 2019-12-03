class ListNode {
  public data: any;
  public next = undefined;

  constructor(data: any) {
    this.data = data;
  }
}

class DoubleListNode {
  public data: any;
  public next = undefined;
  public previous = undefined;

  constructor(data: any) {
    this.data = data;
  }
}

class Stack {
  public peek() {
    return this.top && this.top.data;
  }

  public pop(): any {
    const temp = this.top;
    this.top = this.top.next;
    return temp.data;
  }

  public push(data: any) {
    const temp = this.top;
    this.top = new ListNode(data);
    this.top.next = temp;
  }

  private top: ListNode;
}

class Queue {
  public queue(data: any) {
    if (!this.top) {
      this.top = this.bottom = new DoubleListNode(data);
    } else {
      const temp = this.top;
      this.top = new DoubleListNode(data);
      this.top.next = temp;
      temp.previous = this.top;
    }
  }

  public deQueue(): any {
    const temp = this.bottom;
    this.bottom = this.bottom.previous;
    return temp.data;
  }

  private top: DoubleListNode;

  private bottom: DoubleListNode;
}

const testStack = new Stack();

testStack.push("bob");
testStack.push("janice");
testStack.push("elderberry");

console.log(testStack.pop());
console.log(testStack.pop());
console.log(testStack.pop());

const testQueue = new Queue();

testQueue.queue("five");
testQueue.queue("rank");
testQueue.queue("crows");

console.log(testQueue.deQueue());
console.log(testQueue.deQueue());
console.log(testQueue.deQueue());

class MyQueue {
  private stackOne = new Stack();
  private stackTwo = new Stack();

  public queue(data) {
    this.stackOne.push(data);
    this.stackTwo.push(data);
  }

  public deQueue() {
    let count = 0;

    while (this.stackTwo.peek()) {
      this.stackOne.push(this.stackTwo.pop());
      count++;
    }

    const returnValue = this.stackOne.pop();

    for (let i = 0; i < count; i++) {
      this.stackTwo.push(this.stackOne.pop());
    }

    return returnValue;
  }
}

const testQueueTwo = new MyQueue();

testQueueTwo.queue("five");
testQueueTwo.queue("rank");
testQueueTwo.queue("crows");

console.log(testQueueTwo.deQueue());
console.log(testQueueTwo.deQueue());
console.log(testQueueTwo.deQueue());
