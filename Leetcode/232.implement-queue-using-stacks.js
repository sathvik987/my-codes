class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    push(v) {
        let len = this.stack1.length;
        for (let i = 0; i < len; i++) {
            this.stack2.push(this.stack1.pop())
        }
        this.stack2.push(v)
    }
    pop() {
        let len = this.stack2.length;
        for (let i = 0; i < len; i++) {
            this.stack1.push(this.stack2.pop())
        }
        return this.stack1.pop()
    }
    peek() {
        if (this.stack1.length) {
            return this.stack1[this.stack1.length - 1]
        } else if (this.stack2.length) {
            return this.stack2[0]
        }
        return null
    }
    empty() {
        return this.stack1.length === 0 && this.stack2.length === 0
    }
}
