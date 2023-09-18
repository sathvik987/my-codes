class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
    }

    size() {
        return this._heap.length;
    }

    peek() {
        return this._heap[0];
    }

    isEmpty() {
        return this._heap.length === 0;
    }

    _parent(idx) {
        return Math.floor((idx - 1) / 2);
    }

    _leftChild(idx) {
        return idx * 2 + 1;
    }

    _rightChild(idx) {
        return idx * 2 + 2;
    }

    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }

    _compare(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }

    push(value) {
        this._heap.push(value);
        this._siftUp();

        return this.size();
    }

    _siftUp() {
        let nodeIdx = this.size() - 1;

        while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
            this._swap(nodeIdx, this._parent(nodeIdx));
            nodeIdx = this._parent(nodeIdx);
        }
    }

    pop() {
        if (this.size() > 1) {
            this._swap(0, this.size() - 1);
        }

        const poppedValue = this._heap.pop();
        this._siftDown();
        return poppedValue;
    }

    _siftDown() {
        let nodeIdx = 0;

        while (
            (this._leftChild(nodeIdx) < this.size() &&
                this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
            (this._rightChild(nodeIdx) < this.size() &&
                this._compare(this._rightChild(nodeIdx), nodeIdx))
        ) {
            const greaterChildIdx =
                this._rightChild(nodeIdx) < this.size() &&
                    this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
                    ? this._rightChild(nodeIdx)
                    : this._leftChild(nodeIdx);
            this._swap(greaterChildIdx, nodeIdx);
            nodeIdx = greaterChildIdx;
        }
    }
}

//My sol
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


/* const pq = new PriorityQueue();
pq.push(15);
pq.push(12);
pq.push(50);
pq.push(7);
pq.push(40);
pq.push(22);

while (!pq.isEmpty()) {
    console.log(pq.pop());
} */
let pq = new priorityQueue();
pq.push(6)
pq.push(10)
pq.push(9)
pq.push(9)
pq.push(4)
pq.push(2)
console.log(pq.pop());
console.log(pq.pop());
console.log(pq.pop());
console.log(pq.pop());
console.log(pq.pop());
console.log(pq.pop()); 