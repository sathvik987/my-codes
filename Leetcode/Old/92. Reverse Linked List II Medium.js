/* Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL

 */


/**
* Definition for singly-linked list.


* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */


// T - O(n)
//S - O(1)
var reverseBetween = function (head, m, n) {

    let currentPos = 1, currentNode = head, start = head;

    while (currentPos < m) {
        start = currentNode;
        currentNode = currentNode.next;
        currentPos++;
    }

    let newList = null, tail = currentNode

    while (currentPos >= m && currentPos <= n) {
        let temp = currentNode.next
        currentNode.next = newList
        newList = currentNode
        currentNode = temp
        currentPos++
    }

    start.next = newList
    tail.next = currentNode

    if (m > 1) {
        return head
    } else {
        return newList // for input like 1->2->3->4->5->NULL, m = 1, n = 4
    }



};

