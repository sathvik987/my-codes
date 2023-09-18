/* There are N network nodes, labelled 1 to N.

Given times, a list of travel times as directed edges times[i] = (u, v, w), where u is the source node, v is the target node,
and w is the time it takes for a signal to travel from source to target.

Now, we send a signal from a certain node K. How long will it take for all nodes to receive the signal? If it is impossible, return -1.

Example 1:

Input: times = [[2,1,1],[2,3,1],[3,4,1]], N = 4, K = 2
Output: 2

Note:

    N will be in the range [1, 100].
    K will be in the range [1, N].
    The length of times will be in the range [1, 6000].
    All edges times[i] = (u, v, w) will have 1 <= u, v <= N and 0 <= w <= 100.

 */

/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
const t = [[1, 2, 9], [1, 4, 2], [2, 5, 1], [4, 2, 4], [4, 5, 6], [3, 2, 3], [5, 3, 7], [3, 1, 5]]
//Using bellman ford algorithm
// T - O(n.e)
// S - O(n)
const networkDelayTime = function (times, N, k) {
    const distances = new Array(N).fill(Infinity);

    distances[k - 1] = 0;
    for (let i = 0; i < N - 1; i++) {
        let count = 0;
        for (let j = 0; j < times.length; j++) {
            const source = times[j][0];
            const target = times[j][1];
            const weight = times[j][2];

            if (distances[source - 1] + weight < distances[target - 1]) {
                distances[target - 1] = distances[source - 1] + weight;
                count++;
            }
        }

        if (count === 0) break; // if there are no changes we can stop iterating
    }

    const ans = Math.max(...distances);
    return ans === Infinity ? -1 : ans;
};
console.log(networkDelayTime(t, 5, 1))


// USing dijkstras algorithm
// T - O(e nlogn)
// S - O(e.n)
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

const networkDelayTime2 = function (times, N, k) {
    const distances = new Array(N).fill(Infinity);
    const adjList = distances.map(() => []);
    distances[k - 1] = 0;

    const heap = new PriorityQueue((a, b) => distances[a] < distances[b]);
    heap.push(k - 1);

    for (let i = 0; i < times.length; i++) {
        const source = times[i][0];
        const target = times[i][1];
        const weight = times[i][2];
        adjList[source - 1].push([target - 1, weight]);
    }

    while (!heap.isEmpty()) {
        const currentVertex = heap.pop();

        const adjacent = adjList[currentVertex];
        for (let i = 0; i < adjacent.length; i++) {
            const neighboringVertex = adjacent[i][0];
            const weight = adjacent[i][1];
            if (distances[currentVertex] + weight < distances[neighboringVertex]) {
                distances[neighboringVertex] = distances[currentVertex] + weight;
                heap.push(neighboringVertex);
            }
        }
    }

    const ans = Math.max(...distances);

    return ans === Infinity ? -1 : ans;
};
