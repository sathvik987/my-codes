/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=left
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


// T - Best - O(n) , Worst - O(n^2) for nums like [5,4,3,2,1]
// S - can be O(1) because of tail recursion
const findKthLargest = (nums, k) => {
    const getPartition = (array, start, end) => {
        let pivotValue = array[end]
        let p1 = start
        let p2 = end
        while (p1 < p2) {
            if (array[p1] <= pivotValue) {
                p1++
            } else {
                let temp = array[p2 - 1]
                array[p2 - 1] = array[p1]
                array[p1] = temp

                temp = array[p2]
                array[p2] = array[p2 - 1]
                array[p2 - 1] = temp
                p2--
            }

        }

        return p2
    }

    const quickSelect = (array, start, end, indexToSelect) => {
        let partition = getPartition(array, start, end)
        if (partition < indexToFind) {
            return quickSelect(array, partition + 1, end, indexToSelect)
        } else if (partition > indexToFind) {
            return quickSelect(array, start, partition - 1, indexToSelect)
        } else {
            return array[partition]
        }

    }

    let indexToFind = nums.length - k;
    return quickSelect(nums, 0, nums.length - 1, indexToFind)
}
// @lc code=right

