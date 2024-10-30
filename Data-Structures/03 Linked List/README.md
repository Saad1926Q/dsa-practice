# Linked Lists Implementations

---

## 1. Singly Linked List

![Singly Linked List](https://www.freecodecamp.org/news/content/images/2023/05/7.png)

### Description:
A **Singly Linked List** is a sequence of nodes where each node points to the next one in the list. This type of list is particularly useful when memory is an issue, as nodes only store a single reference to the next node (as opposed to Doubly Linked Lists, which store two references). Basic operations like insertion, deletion, and traversal are supported in a sequential manner.

### Methods:

- **prepend(value)**:
    - **Intuition**: Prepending involves inserting a new node at the start of the list. Since we're dealing with a singly linked list, this is a straightforward operation that involves adjusting the `next` pointer of the new node to point to the current head, and then updating the head to the new node.
    - **Time Complexity**: O(1)

- **append(value)**:
    - **Intuition**: Appending is about adding a node to the end of the list. In a singly linked list, this requires traversing the list to find the last node (since there is no direct reference to it). Once found, we update its `next` pointer to the new node. This operation is more expensive in a singly linked list because of the need to traverse the entire list.
    - **Time Complexity**: O(n)

- **insert(value, index)**:
    - **Intuition**: Inserting at an arbitrary position requires navigating to the desired index, updating pointers for the new node, and adjusting pointers for the adjacent nodes. This operation is slower when the insertion happens near the end of the list, as it involves traversing multiple nodes.
    - **Time Complexity**: O(n)

- **removeIndex(index)**:
    - **Intuition**: To remove a node at a specific index, we first traverse to the node before the one to be removed. Once there, we adjust its `next` pointer to skip the node at the given index, thus effectively removing it from the list.
    - **Time Complexity**: O(n)

- **removeValue(value)**:
    - **Intuition**: This method involves traversing the list to locate the node with the specified value, then removing it by adjusting the `next` pointers of the surrounding nodes. If the value is at the head, we simply update the head to the next node.
    - **Time Complexity**: O(n)

- **reverse()**:
    - **Intuition**: Reversing the list involves iterating through each node and adjusting the direction of the `next` pointers so that they point to the previous node instead of the next. After the iteration, the head and tail pointers are swapped.
    - **Time Complexity**: O(n)

- **search(value)**:
    - **Intuition**: Searching for a value requires traversing the list node by node, checking each node's value until a match is found.
    - **Time Complexity**: O(n)

---

## 2. Singly Linked List with Tail

### Description:
The **Singly Linked List with Tail** is an extension of the basic singly linked list, with the added improvement of maintaining a `tail` pointer that always points to the last node. This simple addition significantly improves the efficiency of certain operations, such as appending a node, as it eliminates the need to traverse the entire list to find the last node.

### Key Improvement:
- The **append** operation is more efficient (O(1) time complexity), as we can directly access the last node via the tail pointer rather than traversing the entire list.

### Methods:

- **prepend(value)**:
    - Same as the basic singly linked list, inserting a node at the front of the list and adjusting the head pointer. The tail remains unchanged unless it’s the first node being added.

- **append(value)**:
    - **Intuition**: Unlike the singly linked list, here appending a node is more efficient. We simply adjust the `next` pointer of the current tail to point to the new node and update the tail to point to the new last node.
    - **Time Complexity**: O(1)

- **insert(value, index)**:
    - Same as the basic linked list. If the insertion happens at the end, the tail pointer is updated accordingly.

- **removeFromFront()**:
    - Same as the singly linked list. The head pointer is updated to the next node. If this was the only node in the list, the tail is also set to null.

- **removeFromEnd()**:
    - **Intuition**: Removing the last node involves traversing the list to find the second-to-last node and updating the `tail` pointer to it. This operation still requires traversal, making it O(n), but keeping the tail pointer is useful for quick appends.

---

## 3. Linked List Stack

### Description:
The **Linked List Stack** is an implementation of a stack (Last-In-First-Out) using a singly linked list. The operations are efficient because they only involve manipulating the head of the list.

### Methods:

- **push(value)**:
    - **Intuition**: Pushing onto the stack is equivalent to prepending a node to the front of the list, ensuring that the most recent element added is always at the head.
    - **Time Complexity**: O(1)

- **pop()**:
    - **Intuition**: Popping an element removes the node at the head of the list. The head is updated to the next node, effectively removing the first element.
    - **Time Complexity**: O(1)

- **peek()**:
    - **Intuition**: This operation simply returns the value of the head node without modifying the list.
    - **Time Complexity**: O(1)

---

## 4. Linked List Queue

### Description:
The **Linked List Queue** is an implementation of a queue (First-In-First-Out) using a singly linked list. A tail pointer is used to efficiently enqueue elements at the end, while dequeueing happens from the front of the list.

### Methods:

- **enqueue(value)**:
    - **Intuition**: Enqueueing adds a new element to the end of the list, which can be done efficiently by using the tail pointer.
    - **Time Complexity**: O(1)

- **dequeue()**:
    - **Intuition**: Dequeueing removes the element from the front of the list. The head is updated to the next node, and if the list becomes empty, the tail is also set to null.
    - **Time Complexity**: O(1)

---

## 5. Doubly Linked List

### Description:
A **Doubly Linked List** is a more complex structure where each node contains two references: one to the next node and another to the previous node. This bi-directional reference allows for more flexible traversal and easier manipulation of nodes, especially when removing or inserting elements in the middle of the list.

### Methods:

- **forwardTraversal()**:
    - **Intuition**: This method simply iterates through the list from the head to the tail, printing each node's value. The next pointers are followed in this traversal.
    - **Time Complexity**: O(n)

- **reverseTraversal()**:
    - **Intuition**: This is the opposite of forward traversal. We start at the tail and follow the `prev` pointers to move backwards through the list. This operation showcases the power of a doubly linked list, which allows efficient traversal in both directions.
    - **Time Complexity**: O(n)

- **prepend(value)**:
    - **Intuition**: Similar to the singly linked list, we insert a node at the front of the list. In a doubly linked list, however, we also need to adjust the `prev` pointer of the existing head to point to the new node.
    - **Time Complexity**: O(1)

- **append(value)**:
    - **Intuition**: Appending adds a new node to the end of the list. The `next` pointer of the current tail is updated, and the new node’s `prev` pointer is set to the current tail.
    - **Time Complexity**: O(1)

- **removeFromFront()**:
    - **Intuition**: Removing the first node involves updating the head pointer and also adjusting the `prev` pointer of the new head to null.
    - **Time Complexity**: O(1)

- **removeFromEnd()**:
    - **Intuition**: Removing the last node involves updating the tail pointer and adjusting the `next` pointer of the new tail to null.
    - **Time Complexity**: O(1)

- **removeValue(value)**:
    - **Intuition**: To remove a node with a specific value, we traverse the list until we find the node. Once found, we adjust the `next` pointer of the previous node and the `prev` pointer of the next node, effectively bypassing the node to be removed.
    - **Time Complexity**: O(n)

- **removeIndex(index)**:
    - **Intuition**: Removing a node at a specific index is similar to removing by value but involves traversing the list to the desired index before removing the node.
    - **Time Complexity**: O(n)

---