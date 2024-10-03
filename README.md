# Data Structures and Algorithms Repository

Welcome to my Data Structures and Algorithms (DSA) repository!

I recently started learning DSA and will be adding the code for the problems I solve in this repository. You’ll find solutions primarily in JavaScript, and occasionally in Python, as I continue to improve my skills.

## Repo Structure

```
/dsa-practice
│
├── /Data-Structures
│   ├── /Arrays
│   ├── /Stacks
│   ├── /Queues
│   ├── /Linked-Lists
│   ├── /Trees
│   ├── /Graphs
│   ├── /Heaps
│   ├── /HashTables
│   └── README.md
│
├── /Algorithms
│   ├── /Sorting
│   ├── /Searching
│   ├── /Dynamic-Programming
│   ├── /Greedy
│   ├── /Backtracking
│   ├── /Divide-and-Conquer
│   └── README.md
│
├── /Practice-Problems
│   ├── /Arrays
│   ├── /Strings
│   ├── /Linked-Lists
│   ├── /Trees
│   ├── /Graphs
│   ├── /Dynamic-Programming
│   ├── /Backtracking
│   └── README.md
│
└── README.md
```

---

## Overview

### Algorithm Design Techniques
- **Brute Force**: Tries all possible solutions until the correct one is found. Simple but often inefficient.

- **Greedy Algorithm**: This approach makes the best choice at each step, hoping that these local best choices will lead to a global best solution. It’s like always picking the quickest or cheapest option available without worrying about future consequences.

- **Divide and Conquer**: Breaks the problem into smaller sub-problems, solves each one independently, and combines the results.

- **Dynamic Programming (DP)**: Solves complex problems by breaking them down into simpler sub-problems, storing the results of solved sub-problems to avoid redundant calculations.

- **Backtracking**: This is a problem-solving technique that explores all possible solutions by building them step by step. If a step leads to a solution that doesn't work, it "backs up" and tries a different option.

### Time Complexity
Time complexity measures the time an algorithm takes to complete based on the size of its input. It helps understand how the runtime of an algorithm grows as the input size increases. Time complexity is commonly expressed using **Big O notation**, which classifies algorithms according to their worst-case or average-case performance.

### Key Concepts

- **Big O Notation**: A mathematical representation that describes the upper limit of an algorithm's time requirements. Common complexities include:
  - **O(1)**: Constant time - execution time doesn't change with input size.
  - **O(log n)**: Logarithmic time - execution time grows slowly as input size increases.
  - **O(n)**: Linear time - execution time grows linearly with input size.
  - **O(n log n)**: Linearithmic time - execution time grows slightly faster than linear.
  - **O(n²)**: Quadratic time - execution time grows quadratically with input size.

### Examples

Consider a simple search in an array:
- **O(1)**: Finding the first element (always takes the same time).
- **O(n)**: Searching for an element in an unsorted array (could take checking each element).

![Time Complexity Graph](https://paper-attachments.dropbox.com/s_2D428973624E7FC84C7D69D11421DE762BEA6B6F3361231FCDCAE0425D14526F_1664885448372_Untitled.drawio+17.png)

### Space Complexity

Space complexity measures the amount of memory an algorithm uses relative to the input size. Like time complexity, it's also expressed in Big O notation. Understanding space complexity is crucial, especially in resource-constrained environments.

### Key Concepts

- **Auxiliary Space**: The temporary space used by an algorithm aside from the input data. This includes space for variables, data structures, etc.
- **Total Space Complexity**: The total space required, including both the input and auxiliary space.

### Examples

- A simple algorithm that swaps two numbers may only require **O(1)** space (constant space).
- An algorithm that stores a copy of an input array will have **O(n)** space complexity.


### What is Recursion?

Recursion is a method where a function calls itself to solve a problem. It breaks down complex problems into simpler subproblems, allowing for elegant and concise solutions. Recursion is commonly used in tasks like traversing data structures, sorting, and searching.

### How Recursion Works

A recursive function typically consists of two main components:
- **Base Case**: The condition under which the recursion stops. This prevents infinite loops and allows the function to return a result.
- **Recursive Case**: The part of the function that includes the recursive call to itself, reducing the problem size with each call.

### Base Case and Recursive Case

### Base Case
The base case is essential for recursion to work correctly. It provides a stopping point for the recursive calls. For example, in calculating the factorial of a number, the base case is when the number is 0 or 1, where the factorial is 1.

### Recursive Case
The recursive case defines how to reduce the problem size. In the factorial example, the recursive case is `n! = n * (n - 1)!`. Here, the function calls itself with a smaller value of `n`.


## Data Structures

Data structures are ways to organize and store data for efficient access and modification.

### Built-in Data Structures in JavaScript

#### Arrays

- **Definition**: Arrays are ordered collections of elements that can be of any type. In JavaScript, arrays are dynamic and maintain the **insertion order**.
- **Iterable**: Arrays are iterable, meaning you can use loops like `for...of` to iterate over their elements.
- **Example**:
    ```js
    let fruits = ['apple', 'banana', 'cherry'];
    ```

##### Common Operations and Time Complexities:
1. **Access by Index**: `O(1)`
2. **Push (Add to End)**: `O(1)` (amortized)
3. **Pop (Remove from End)**: `O(1)`
4. **Shift (Remove from Start)**: `O(n)` (due to reindexing)
5. **Unshift (Add to Start)**: `O(n)` (due to reindexing)
6. **Splice (Add/Remove Elements)**: `O(n)` (depending on elements affected)
7. **Slice (Extract Portion)**: `O(n)` (where `n` is the number of elements copied)
8. **Map (Transform Each Element)**: `O(n)`
   - **Description**: Creates a new array by applying a function to every element of the array.
   - **Example**:
     ```js
     const nums = [1, 2, 3];
     const doubled = nums.map(x => x * 2);  // [2, 4, 6]
     ```
9. **Filter (Select Elements)**: `O(n)`
   - **Description**: Creates a new array by selecting elements that match a condition.
   - **Example**:
     ```js
     const nums = [1, 2, 3, 4];
     const evens = nums.filter(x => x % 2 === 0);  // [2, 4]
     ```
10. **Find (Find First Match)**: `O(n)`
11. **ForEach (Iterate Through Elements)**: `O(n)`
    - **Description**: Executes a provided function once for each array element.
    - **Example**:
      ```js
      const nums = [1, 2, 3];
      nums.forEach(x => console.log(x));  // logs: 1, 2, 3
      ```
12. **Concat (Join Arrays)**: `O(n + m)` (where `n` and `m` are lengths of the arrays)
13. **Join (Convert to String)**: `O(n)`

##### Notes:
- **Insertion order is maintained**.
- **Arrays are iterable**, and can be used with loops like `for...of` to iterate through elements.
- Arrays allow **duplicate elements**.

---

#### Objects

- **Definition**: Objects are unordered collections of key-value pairs where keys are typically strings (or `Symbols`), and values can be any type. Objects are used to represent real-world entities and store related data.
- **Not Iterable**: Objects are not iterable directly, so you cannot use `for...of` to iterate over them.
- **Example**:
    ```js
    let person = { name: 'Alice', age: 30 };
    ```

##### Common Operations and Time Complexities:
1. **Access by Key**: `O(1)`
2. **Insert/Update Key-Value Pair**: `O(1)`
3. **Delete Key-Value Pair**: `O(1)`
4. **Check if Key Exists (`in` or `hasOwnProperty`)**: `O(1)`

##### Notes:
- **Objects are not iterable**, but you can iterate through keys using methods like `Object.keys()`, `Object.values()`, or `Object.entries()`.
- Keys must be **strings** (or `Symbols`).
- **No order** is maintained in plain objects (but insertion order is preserved in modern JavaScript).
- Objects **cannot have duplicate keys**.

---

#### Sets

- **Definition**: Sets are collections of **unique values** (no duplicates). They are used for storing data without duplicates and offer efficient operations for adding, removing, and checking the existence of elements.
- **Iterable**: Sets are iterable, and you can use `for...of` to loop through the elements of a Set.
- **Example**:
    ```js
    let uniqueNumbers = new Set([1, 2, 3, 2]);  // Set will contain 1, 2, 3
    ```

##### Common Operations and Time Complexities:
1. **Add (`add(value)`)**: `O(1)` on average
2. **Delete (`delete(value)`)**: `O(1)` on average
3. **Check Existence (`has(value)`)**: `O(1)` on average
4. **Get Size (`size`)**: `O(1)`
5. **Iterating (`forEach` or `for...of`)**: `O(n)`

##### Difference Between **Sets** and **Arrays**:
- **Sets**:
  - No duplicates allowed.
  - No specific order of elements.
  - Efficient for checking the existence of elements (`O(1)`).
- **Arrays**:
  - Can contain duplicates.
  - Maintains insertion order.
  - Slower existence checks (`O(n)`).

---

#### Maps

- **Definition**: Maps are collections of key-value pairs where keys can be **of any type** (not just strings like in objects). Maps preserve the order of insertion and provide efficient access and manipulation based on keys.
- **Iterable**: Maps are iterable, and you can use `for...of` to loop through key-value pairs.
- **Example**:
    ```js
    let map = new Map();
    map.set('name', 'Bob');
    map.set('age', 25);
    ```

##### Common Operations and Time Complexities:
1. **Insert/Update (`set(key, value)`)**: `O(1)` on average
2. **Get (`get(key)`)**: `O(1)` on average
3. **Delete (`delete(key)`)**: `O(1)` on average
4. **Check if Key Exists (`has(key)`)**: `O(1)` on average
5. **Get Size (`size`)**: `O(1)`
6. **Iterating (`forEach`, `for...of`)**: `O(n)`

##### Difference Between **Maps** and **Objects**:
- **Maps**:
  - Keys can be of any type (objects, numbers, etc.).
  - Ordered by insertion (maintains order).
  - Iteration is straightforward using `for...of`.
  - Suitable for more complex use cases with frequent key-value pair manipulation.
- **Objects**:
  - Keys must be strings (or `Symbols`).
  - Not ordered.
  - Not directly iterable using `for...of` (requires `Object.keys()`, etc.).

---
Happy coding!