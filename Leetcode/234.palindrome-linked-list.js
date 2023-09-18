/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    /*     let curr = head;
        let values = [];
        while (curr) {
            values.push(curr.val)
            curr = curr.next
        }
        let i = 0;
        let j = values.length - 1
        while (i <= j) {
            if (values[i] !== values[j]) {
                return false
            }
            i++
            j--
        }
        return true; */
    let fastPointer = head;
    let slowPointer = head;
    while (fastPointer && fastPointer.next) {
        fastPointer = fastPointer.next.next
        slowPointer = slowPointer.next
    }

    let first = null
    let second = slowPointer;
    while (second) {
        let temp = second.next;
        second.next = first
        first = second
        second = temp
    }

    let leftList = head;
    let rightList = first;
    while (leftList && rightList) {
        if (leftList.val !== rightList.val) {
            return false
        }
        leftList = leftList.next
        rightList = rightList.next
    }

    return true
};
// @lc code=end

