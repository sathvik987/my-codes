""" Implement a first in first out(FIFO) queue using only two stacks.The implemented queue should support all the functions
of a normal queue(push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.

Notes:

You must use only standard operations of a stack, which means only push to top, peek / pop from top, size, and is
empty operations are valid.Depending on your language, the stack may not be supported natively.You may simulate a
stack using a list or deque(double - ended queue) as long as you use only a stack's standard operations.
Follow - up: Can you implement the queue such that each operation is amortized O(1) time complexity ? In other words,
performing n operations will take overall O(n) time even if one of those operations may take longer.

Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false """

# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()


class MyQueue:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.first = []
        self.last = []

    def __str__(self):
        return str(self.__dict__)

    def push(self, x: int) -> None:
        """
        Push element x to the back of queue.
        """
        for _ in range(0, len(self.first)):
            self.last.append(self.first.pop())

        self.last.append(x)

    def pop(self) -> int:
        """
        Removes the element from in front of queue and returns that element.
        """
        for _ in range(0, len(self.last)):
            self.first.append(self.last.pop())

        return self.first.pop()

    def peek(self) -> int:
        """
        Get the front element.
        """
        if len(self.first) == 0 and len(self.last) == 0:
            return None
        if len(self.first) != 0:
            return self.first[len(self.first)-1]
        return self.last[0]

    def empty(self) -> bool:
        """
        Returns whether the queue is empty.
        """
        if len(self.first) != 0 or len(self.last) != 0:
            return False
        return True


obj = MyQueue()
print(obj.empty())
obj.push(1)
obj.push(2)
obj.push(3)
print(obj)
print(obj.peek())
print(obj.pop())
print(obj.empty())
