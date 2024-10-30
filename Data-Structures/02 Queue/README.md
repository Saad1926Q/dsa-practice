# Queue Implementations

## 1. Basic Queue

### Overview
The basic queue implementation utilizes an array to store elements. This implementation follows the FIFO (First In, First Out) principle, where the first element added to the queue is the first to be removed.

![Basic Queue](https://afteracademy.com/images/queue-and-its-basic-operations-operations-9bfc0ef1b53c11f9.png)

### Methods
- **`enqueue(element)`**: Adds an element to the end of the queue. The new element is appended to the end of the array.
  
- **`dequeue()`**: Removes and returns the element from the front of the queue. This method operates in **O(n)** time because it shifts all remaining elements in the array to fill the gap left by the removed element.
  
- **`isEmpty()`**: Checks if the queue is empty. It returns `true` if the length of the array is zero; otherwise, it returns `false`.
  
- **`peek()`**: Returns the front element of the queue without removing it. If the queue is empty, it returns `null`.
  
- **`size()`**: Returns the number of elements in the queue by checking the length of the array.
  
- **`print()`**: Displays the current elements in the queue by logging the array to the console.

### Time Complexity
- **`enqueue`**: O(1)
- **`dequeue`**: O(n)
- **`peek`**: O(1)
- **`isEmpty`**: O(1)
- **`size`**: O(1)

---

## 2. Optimized Queue

### Overview
The optimized queue implementation uses an object to store elements and keeps track of the front and rear indices. This design improves the performance of the dequeue operation.

### Methods
- **`enqueue(val)`**: Adds an element to the end of the queue. If the queue is empty, it initializes the front index; otherwise, it simply increments the rear index and adds the new value.

- **`dequeue()`**: Removes and returns the element from the front of the queue. This method operates in **O(1)** time because it directly accesses the front index, without needing to shift elements. If the queue becomes empty after this operation, it resets the front and rear indices.

- **`isEmpty()`**: Checks if the queue is empty by verifying if the front index is -1.

- **`peek()`**: Returns the front element of the queue without removing it. If the queue is empty, it returns `null`.

- **`size()`**: Returns the number of elements currently in the queue by calculating the difference between the rear and front indices.

### Time Complexity
- **`enqueue`**: O(1)
- **`dequeue`**: O(1)
- **`peek`**: O(1)
- **`isEmpty`**: O(1)
- **`size`**: O(1)

### Time Complexity Explanation
In the optimized queue, the **`dequeue`** operation becomes O(1) because it uses an index to keep track of the front of the queue. Instead of shifting all elements in the array, it simply increments the front index when an element is removed. This is a significant performance improvement over the basic queue implementation, where **`dequeue`** is O(n) due to the need to shift all elements in the array after removing the front element.

---

## 3. Circular Queue

### Overview
The circular queue implementation provides a fixed-size array that wraps around to utilize space more efficiently. It maintains a `front` and `rear` index to track the current positions in the queue.

![Circular Queue](https://media.geeksforgeeks.org/wp-content/uploads/Circular-queue_1.png)

### Methods
- **`enqueue(val)`**: Adds an element to the end of the queue. If the queue is full, it logs an error message. If the queue is empty, it initializes both the front and rear indices; otherwise, it increments the rear index using the modulus operator to wrap around.

- **`dequeue()`**: Removes and returns the front element of the queue. If the queue becomes empty after this operation, it resets both the front and rear indices to -1. This method uses the modulus operator to wrap around the indices.

- **`isEmpty()`**: Checks if the queue is empty by verifying if the front index is -1.

- **`isFull()`**: Checks if the queue is full by using the condition that the next position of rear (incremented by 1 and wrapped around) is equal to the front index.

- **`display()`**: Displays the current elements in the queue in the order they were added. It iterates from the front index to the rear index, wrapping around as necessary.

### Time Complexity
- **`enqueue`**: O(1)
- **`dequeue`**: O(1)
- **`isEmpty`**: O(1)
- **`isFull`**: O(1)
- **`display`**: O(n)

---