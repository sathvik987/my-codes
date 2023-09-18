/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(val) {
        this.stack.push(val)
        if (!this.minStack.length) {
            this.minStack.push(val)
        } else {
            if (val < this.minStack[this.minStack.length - 1]) {
                this.minStack.push(val)
            } else {
                this.minStack.push(this.minStack[this.minStack.length - 1])
            }
        }
    }
    pop() {
        this.stack.pop()
        this.minStack.pop()
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

