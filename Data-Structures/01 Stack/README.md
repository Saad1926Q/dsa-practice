# Stack Implementations

This repository contains implementations of a basic stack, a minimum stack, and an optimized minimum stack in JavaScript. Below is a detailed explanation of the logic and functionality of each implementation.

## Stack

### Overview
The `Stack` class represents a standard stack data structure, which follows the Last In First Out (LIFO) principle. This means that the last element added to the stack will be the first one to be removed.

### Methods
- **`push(val)`**: Adds an element to the top of the stack. It increments the `top` index and pushes the value onto the internal array (`st`).
  
- **`pop()`**: Removes and returns the top element of the stack. Before removing, it checks if the stack is empty. If it is, it returns `null` and prints a message.

- **`isEmpty()`**: Returns `true` if the stack has no elements, and `false` otherwise.

- **`peek()`**: Returns the top element of the stack without removing it.


---

## Min Stack

### Overview
The `minStack` class extends the basic stack functionality to also keep track of the minimum element. It stores pairs of values where the first element is the actual value and the second element is the minimum value at that point in the stack.

### Methods
- **`push(val)`**: Adds an element to the top of the stack. It also updates the minimum value by comparing the new value with the current minimum.

- **`pop()`**: Removes and returns the top element of the stack while maintaining the minimum value.

- **`getMin()`**: Returns the minimum element in the stack.

- **`isEmpty()`**: Returns `true` if the stack has no elements, and `false` otherwise.

- **`peek()`**: Returns the top element of the stack without removing it.

### How It Works
When an element is pushed onto the `minStack`, it checks if the stack is empty. If it is, the element is pushed along with itself as the minimum. If not, it compares the new value with the current minimum to ensure that the second element in the pair always represents the minimum value.

- **Time Complexity**:
    - `getMin()`: O(1)

- **Space Complexity**: O(2n), where n is the number of elements in the main stack, due to the storage of the elements in two arrays (the main stack and the minimum stack).


---

## Min Stack Optimized

### Overview
The `minStackOptimized` class implements a more efficient version of the minimum stack. It uses two separate stacks: one for the actual stack and another for tracking the minimum values. This ensures that operations on both stacks remain efficient.

### Methods
- **`push(val)`**: Adds an element to the main stack and updates the minimum stack only if the new value is less than or equal to the current minimum.

- **`pop()`**: Removes and returns the top element of the main stack and also updates the minimum stack if the popped element is the current minimum.

- **`getMin()`**: Returns the minimum element from the minimum stack.

- **`isEmpty()`**: Returns `true` if the stack has no elements, and `false` otherwise.

- **`peek()`**: Returns the top element of the main stack without removing it.

- **Time Complexity**:
    - `getMin()`: O(1)

- **Space Complexity**: O(n), where n is the number of elements in the main stack, due to the storage of the elements in two arrays (the main stack and the minimum stack).

---
