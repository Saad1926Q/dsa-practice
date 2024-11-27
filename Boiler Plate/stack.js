class Stack {
    constructor() {
      this.stack = [];
    }
  
    // Push an element onto the stack
    push(element) {
      this.stack.push(element);
    }
  
    // Pop an element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty!";
      }
      return this.stack.pop();
    }
  
    // Peek the top element of the stack
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty!";
      }
      return this.stack[this.stack.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.stack.length === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.stack.length;
    }
  
    // Print all elements in the stack
    print() {
      console.log(this.stack.join(" "));
    }
  }
  
  