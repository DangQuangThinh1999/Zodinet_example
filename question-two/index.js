class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
  clear() {
    return (this.items = []);
  }
}

const stack = new Stack();

console.log(stack.isEmpty()); // true
console.log(stack.size()); // 0

// Pushing up some values
stack.push("Zilmira");
stack.push("John");
stack.push("Joel");

console.log(stack.isEmpty()); // false
console.log(stack.size()); // 3
console.log(stack.peek()); // Joel

const removedElement = stack.pop();

console.log(removedElement); // Joel

console.log(stack.isEmpty()); // false
console.log(stack.size()); // 2
console.log(stack.peek()); // John

stack.clear();
console.log(stack.isEmpty()); // true
console.log(stack.size()); // 0
