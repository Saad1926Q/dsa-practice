class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
      this.size = 0;
    }
  
    // Add an element to the queue
    enqueue(element) {
      const newNode = new Node(element);
      if (this.rear === null) {
        this.front = this.rear = newNode;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
      this.size++;
    }
  
    // Remove an element from the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty!";
      }
      const dequeuedValue = this.front.value;
      this.front = this.front.next;
      if (this.front === null) {
        this.rear = null;
      }
      this.size--;
      return dequeuedValue;
    }
  
    // Peek the front element
    peek() {
      if (this.isEmpty()) {
        return "Queue is empty!";
      }
      return this.front.value;
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.front === null;
    }
  
    // Get the size of the queue
    getSize() {
      return this.size;
    }
  
    // Print all elements in the queue
    print() {
      let current = this.front;
      const result = [];
      while (current) {
        result.push(current.value);
        current = current.next;
      }
      console.log(result.join(" "));
    }
  }