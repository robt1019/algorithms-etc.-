class SetOfStacks {
  max = 5;
  top = [0, 0];
  stacks: any[][] = [];

  constructor(max: number) {
    this.max = max;
  }

  push(val: any) {
    if (this.top[1] === this.max || !this.stacks.length) {
      this.stacks.push([val]);
      this.top[0]++;
      this.top[1] = 0;
    } else {
      this.stacks[this.top[0]].push(val);
      this.top[1]++;
    }
  }

  pop() {
    const ret = this.stacks[this.top[0]].pop();

    if (this.top[1] === 0) {
      if (this.top[0] > 0) {
        this.top[0]--;
        this.top[1] = this.max;
      } else {
        this.top[1]--;
      }
    }

    return ret;
  }
}

const testStack = new SetOfStacks(7);

testStack.push(2);
testStack.push(3);
testStack.push(4);
testStack.push(2);
testStack.push(6);
testStack.push(7);
testStack.push(8);
testStack.push(9);
testStack.push(10);

console.log(testStack.top);
console.log(testStack.stacks.length);
