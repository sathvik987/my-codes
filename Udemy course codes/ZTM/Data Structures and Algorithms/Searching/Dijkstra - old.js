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


let adjList = [[[2, 4], [4, 6]],
[[0, 2], [2, 9]],
[[4, 1]],
[[2, 3], [1, 5]],
[[3, 7]],]

adjList2 = [[[2, 7], [3, 3]],
[],
[[1, 5]],
[[2, 2]],
]
// T - O(e log v)
// S - O(v) 
function dijkstraAlg(graph, s) {
    const distances = new Array(graph.length).fill(Infinity)
    distances[s] = 0
    const heap = new PriorityQueue((a, b) => a < b)
    heap.push(s)
    while (!heap.isEmpty()) {
        const currentVertex = heap.pop();
        const adjacent = graph[currentVertex];
        for (let i = 0; i < adjacent.length; i++) {
            const neighboringVertex = adjacent[i][0];
            const weight = adjacent[i][1];
            if (distances[currentVertex] + weight < distances[neighboringVertex]) {
                distances[neighboringVertex] = distances[currentVertex] + weight;
                heap.push(neighboringVertex);

            }
        }
    }
    return distances
}

console.log(dijkstraAlg(adjList, 1))
console.log(dijkstraAlg(adjList2, 0))
