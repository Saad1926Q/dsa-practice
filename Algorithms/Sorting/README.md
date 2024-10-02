# Sorting Algorithms

Sorting algorithms are essential techniques for arranging elements in a specific order (usually ascending or descending). Below are detailed explanations of some common sorting algorithms along with their time complexities and characteristics.

## 1. Bubble Sort
**Time Complexity**: `O(n^2)`  
**Space Complexity**: `O(1)`  

### Description:
Bubble Sort repeatedly traverses the list, comparing adjacent elements and swapping them if they are in the wrong order. This process continues until no more swaps are needed, indicating that the list is sorted. The largest unsorted element "bubbles" up to its correct position with each iteration.

### How it Works:
1. Start at the beginning of the array.
2. Compare the first two elements. If the first element is greater than the second, swap them.
3. Move to the next pair of elements and repeat the process.
4. Continue this process until the end of the array is reached. This completes one full pass.
5. Repeat the entire process for `n-1` passes (where `n` is the number of elements).

### Use Cases:
- Simple to implement and understand.
- Suitable for small datasets.
- Can be optimized to stop early if the array becomes sorted before all passes are complete.

### Example:
Given the array `[5, 2, 9, 1, 5, 6]`, the process would look like this:

1. Compare 5 and 2 → swap → `[2, 5, 9, 1, 5, 6]`
2. Compare 5 and 9 → no swap.
3. Compare 9 and 1 → swap → `[2, 5, 1, 9, 5, 6]`
4. Continue until the array is fully sorted.

---

## 2. Selection Sort
**Time Complexity**: `O(n^2)`  
**Space Complexity**: `O(1)`  

### Description:
Selection Sort divides the input list into a sorted part and an unsorted part. It repeatedly selects the smallest (or largest, depending on sorting order) element from the unsorted part and moves it to the end of the sorted part.

### How it Works:
1. Start with the first element as the minimum.
2. Iterate through the array to find the minimum element.
3. Swap the found minimum element with the first element.
4. Move the boundary of the sorted and unsorted parts one position to the right and repeat the process until the entire array is sorted.

### Use Cases:
- Simple and intuitive.
- Performs well on small lists.
- Inefficient on larger lists due to its quadratic time complexity.

### Example:
For the array `[64, 25, 12, 22, 11]`, the steps are:

1. Find the minimum (11) and swap it with the first element → `[11, 25, 12, 22, 64]`
2. Find the minimum (12) in the remaining unsorted part and swap → `[11, 12, 25, 22, 64]`
3. Continue until sorted: `[11, 12, 22, 25, 64]`

---

## 3. Insertion Sort
**Time Complexity**: `O(n^2)`  
**Space Complexity**: `O(1)`  

### Description:
Insertion Sort builds a sorted array one element at a time. It takes each element from the unsorted part and finds the appropriate position in the sorted part, shifting all larger elements to the right.

### How it Works:
1. Start from the second element (assuming the first element is sorted).
2. Compare the current element with elements in the sorted part.
3. Shift larger elements one position to the right to make room for the current element.
4. Insert the current element into its correct position.
5. Repeat until the entire array is sorted.

### Use Cases:
- Efficient for small datasets or nearly sorted data.
- Stable sorting algorithm (maintains the relative order of records with equal keys).

### Example:
For the array `[5, 2, 4, 6, 1, 3]`, the process would be:

1. Start with `5` sorted, move to `2`, shift `5` → `[2, 5, 4, 6, 1, 3]`
2. Move to `4`, shift `5` → `[2, 4, 5, 6, 1, 3]`
3. Continue until sorted: `[1, 2, 3, 4, 5, 6]`

---

## 4. Merge Sort
**Time Complexity**: `O(n log n)`  
**Space Complexity**: `O(n)`  

### Description:
Merge Sort is a divide-and-conquer algorithm that splits the input array into two halves, recursively sorts them, and then merges the two sorted halves back together. 

### How it Works:
1. Divide the array into two halves.
2. Recursively sort each half.
3. Merge the two sorted halves to produce a single sorted array.

### Use Cases:
- Consistent performance of `O(n log n)` regardless of input.
- Suitable for large datasets.
- Not in-place (requires additional memory).

### Example:
For the array `[38, 27, 43, 3, 9, 82, 10]`:

1. Split into `[38, 27, 43]` and `[3, 9, 82, 10]`
2. Split further until single elements: `[38]`, `[27]`, `[43]`, `[3]`, `[9]`, `[82]`, `[10]`
3. Merge back together: `[27, 38, 43]`, `[3, 9, 10, 82]`
4. Final merge: `[3, 9, 10, 27, 38, 43, 82]`

---

## 5. Quick Sort
**Time Complexity**: `O(n log n)` on average, `O(n^2)` in the worst case  
**Space Complexity**: `O(log n)` on average (due to recursive calls)  

### Description:
Quick Sort selects a 'pivot' element from the array and partitions the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

### How it Works:
1. Select a pivot (often the last element).
2. Partition the array into elements less than the pivot and those greater than the pivot.
3. Recursively apply the above steps to the left and right sub-arrays.
4. Combine the sorted sub-arrays and the pivot to form the sorted array.

### Use Cases:
- Very efficient for large datasets and average cases.
- Commonly used in practice due to its speed.
- In-place sorting (does not require additional memory for the entire array).

### Example:
For the array `[3, 6, 8, 10, 1, 2, 1]`:

1. Choose `1` as the pivot.
2. Partition the array → `[1, 1, 2, 10, 3, 6, 8]`
3. Recursively sort the left (`[1]`) and right (`[10, 3, 6, 8]`) sub-arrays.
4. Final sorted array: `[1, 1, 2, 3, 6, 8, 10]`

---