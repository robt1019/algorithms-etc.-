function Stack() {
  this.mins = [];
  this.stack = [];

  this.push = function(val) {
    this.stack.push(val);
    if (!this.mins.length || val <= this.mins[this.mins.length - 1]) {
      this.mins.push(val);
    }
  };

  this.pop = function() {
    const popped = this.stack.pop();
    if (popped === this.mins[this.mins.length - 1]) {
      this.mins.pop();
    }
    return popped;
  };

  this.min = function() {
      return this.mins[this.mins.length - 1];
  };
}

const testStack = new Stack();

testStack.push(6);
testStack.push(5);
testStack.push(3);
testStack.push(4);
testStack.push(1);
testStack.push(2);

console.log(testStack.min());
testStack.pop();
testStack.pop();
testStack.pop();
console.log(testStack.min());