/* Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Notice that you should not modify the linked list.

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.

Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.


Constraints:

    The number of the nodes in the list is in the range [0, 10^4].
    -10^5 <= Node.val <= 10^5
    pos is -1 or a valid index in the linked-list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// ---- Generate our linked list ----
const linkedList = [8, 7, 6, 5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);

let curr = linkedList, cycleNode;
while (curr.next !== null) {
    if (curr.val === 3) {
        cycleNode = curr;
    }

    curr = curr.next;
}

curr.next = cycleNode;
// ---- Generate our linked list ----

// --------- Our solution -----------

// T- O(n)
// S - O(n)
const findCycle1 = function (head) {
    if (!head) return null;
    const seenNodes = new Set();
    let currentNode = head;

    while (!seenNodes.has(currentNode)) {
        if (currentNode.next === null) {
            return null
        }

        seenNodes.add(currentNode);

        currentNode = currentNode.next;
    }

    return currentNode;
}

console.log(findCycle1(linkedList));




// T- O(n)
// S - O(1)
// Floyd’s Tortoise and Hare Algorithm

const findCycle = function (head) {
    if (!head) return null;

    let tortoise = head, hare = head;

    while (true) {
        tortoise = tortoise.next;
        hare = hare.next;

        if (hare === null || hare.next === null) {
            return null;
        } else {
            hare = hare.next;
        }

        if (tortoise === hare) break;
    }

    let p1 = head,
        p2 = tortoise;

    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p2
};

console.log(findCycle(linkedList));