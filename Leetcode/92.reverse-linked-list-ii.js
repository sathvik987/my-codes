/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let currentNode = head;
    let newList = null;
    let pos = 1;
    let start = head;


    while (pos < left) {
        start = currentNode;
        currentNode = currentNode.next;
        pos++
    }

    let tail = currentNode;

    while (pos >= left && pos <= right) {
        let nextNode = currentNode.next;
        currentNode.next = newList;
        newList = currentNode;
        currentNode = nextNode
        pos++
    }

    start.next = newList;
    tail.next = currentNode;

    if (left > 1) {
        return head
    } else {
        return newList
    }

};
// @lc code=end

