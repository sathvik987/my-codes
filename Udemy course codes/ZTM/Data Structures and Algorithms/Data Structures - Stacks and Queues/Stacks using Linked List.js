class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top.value
    }
    push(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.bottom = newNode
            this.top = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
        return this

    }
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return holdingPointer;

    }
    isEmpty() {
        if (this.top === null) {
            return true
        } else {
            return false
        }
    }
    print() {
        let arr = []
        let top = this.top
        while (top !== null) {
            arr.push(top.value)
            top = top.next

        }
        return arr
    }
    size() {
        return this.length
    }
}

const myStack = new Stack();

myStack.push('Discord')
myStack.push('Udemy')
myStack.push('Google')
console.log(myStack.print())
console.log(myStack.size())
console.log('Peek:', myStack.peek())
console.log('Pop:', myStack.pop())
console.log(myStack.print())
console.log(myStack.size())
console.log('isEmpty:', myStack.isEmpty())
myStack.pop()
myStack.pop()
console.log(myStack.print())
console.log(myStack.size())
console.log('isEmpty:', myStack.isEmpty())
console.log(myStack)
