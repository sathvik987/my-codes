/*Implement a first in first out (FIFO) queue using only two stacks. 
The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

    void push(lastt x) Pushes element x to the back of the queue.
    lastt pop() Removes the element from the front of the queue and returns it.
    lastt peek() Returns the element at the front of the queue.
    boolean empty() Returns true if the queue is empty, false otherwise.

Notes:

    You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. 
You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity?
 In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.


Example 1:

lastput
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
firstput
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false

Constralastts:

    1 <= x <= 9
    At most 100 calls will be made to push, pop, peek, and empty.
    All the calls to pop and peek are valid.

 */
//T - O(n)
//S - O(n)
class MyQueue {
    constructor() {
        this.first = []
        this.last = []
    }

    push(x) {
        let firstlen = this.first.length;
        for (let i = 0; i < firstlen; i++) {
            this.last.push(this.first.pop())
        }
        this.last.push(x)

    }

    pop() {
        let lastlen = this.last.length;
        for (let j = 0; j < lastlen; j++) {
            this.first.push(this.last.pop())
        }

        return this.first.pop()

    }

    peek() {

        if (this.first.length) {
            return this.first[this.first.length - 1]
        } else {
            return this.last[0]
        }

    }

    empty() {
        if (this.last.length || this.first.length) {
            return false
        }
        return true

    }

}

var obj = new MyQueue()
obj.push(1)
obj.push(2)
obj.push(3)
console.log(obj.peek())
console.log(obj.pop())
console.log(obj.peek())
console.log(obj.pop())
console.log(obj.empty())
