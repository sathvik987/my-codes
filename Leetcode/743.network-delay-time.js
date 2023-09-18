/*
 * @lc app=leetcode id=743 lang=javascript
 *
 * [743] Network Delay Time
 */

// @lc code=start
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
class priorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
    }
    _parent(index) {
        return Math.floor((index - 1) / 2)
    }
    _left(index) {
        return (index * 2) + 1
    }
    _right(index) {
        return (index * 2) + 2
    }
    pop() {
        if (this.size() > 1) {
            let item = this._heap[0]
            this._heap[0] = this._heap.pop();
            let index = 0

            while ((this._left(index) < this.size() && this._comparator(this._heap[this._left(index)], this._heap[index]))
                || ((this._right(index) < this.size() && this._comparator(this._heap[this._right(index)], this._heap[index])))) {
                let indexToSwap = this._right(index) < this.size() &&
                    this._comparator(this._heap[this._right(index)], this._heap[this._left(index)]) ? this._right(index) : this._left(index)

                let temp = this._heap[indexToSwap];
                this._heap[indexToSwap] = this._heap[index]
                this._heap[index] = temp
                index = indexToSwap
            }
            return item
        } else {
            return this._heap.pop()
        }
    }
    push(val) {
        this._heap.push(val)
        let index = this.size() - 1;
        while (index > 0 && this._comparator(this._heap[index], this._heap[this._parent(index)])) {
            let parent = this._parent(index)
            let temp = this._heap[parent]
            this._heap[parent] = this._heap[index]
            this._heap[index] = temp
            index = parent;
        }
    }
    peek() {
        return this._heap[0]
    }
    size() {
        return this._heap.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
}



var networkDelayTime = function (times, n, k) {
    let distances = new Array(n).fill(Infinity)
    let adjList = new Array(n).fill(Infinity).map(() => [])

    for (const time of times) {
        adjList[time[0] - 1].push([time[1] - 1, time[2]])
    }
    distances[k - 1] = 0;

    let heap = new priorityQueue((a, b) => distances[a] < distances[b])
    heap.push(k - 1)

    while (!heap.isEmpty()) {
        let currentVertex = heap.pop();
        let adjacent = adjList[currentVertex]
        for (const v of adjacent) {
            let nextVertex = v[0];
            let weight = v[1]
            if (distances[currentVertex] + weight < distances[nextVertex]) {
                distances[nextVertex] = distances[currentVertex] + weight
                heap.push(nextVertex)
            }
        }
    }

    let max = Math.max(...distances)

    return max === Infinity ? -1 : max

    //BellmanFord
    /*     let distances = new Array(n).fill(Infinity)
        distances[k - 1] = 0;
    
        for (let i = 0; i < n - 1; i++) {
            let count = 0;
            for (const time of times) {
                let source = time[0];
                let target = time[1];
                let weight = time[2]
    
                if (distances[source - 1] + weight < distances[target - 1]) {
                    distances[target - 1] = distances[source - 1] + weight
                    count++
                }
            }
    
            if (count === 0) {
                break
            }
        }
    
    
        let max = Math.max(...distances)
    
        return max === Infinity ? -1 : max */
};
// @lc code=end

