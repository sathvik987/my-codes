class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first.value
    }
    enqueue(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }
    dequeue() {
        if (!this.first) {
            return null
        }
        if (this.first === this.last) {
            this.last = null
        }
        const dequeueItem = this.first
        this.first = this.first.next
        this.length--
        return dequeueItem.value
    }
    //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue('joy')
myQueue.enqueue('matt')
myQueue.enqueue('pavel')
console.log(myQueue.enqueue('samir'))
console.log(myQueue.peek())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.peek())
console.log(myQueue)
myQueue.dequeue()
console.log(myQueue)
myQueue.dequeue()
console.log(myQueue)
console.log(myQueue.dequeue())
  //Joy
  //Matt
  //Pavel
  //Samir