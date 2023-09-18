/* Given n non-negative integers representing an elevation map where the width of each bar is 1,
compute how much water it can trap after raining.

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
In this case, 6 units of rain water (blue section) are being trapped.

Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

Constraints:
    n == height.length
    0 <= n <= 3 * 10^4
    0 <= height[i] <= 10^5
 */

// T - O(n^2) 
// S - O(1)
const height2 = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]

var trap2 = function (height) {
    let totalWater = 0;

    for (let p = 0; p < height.length; p++) {
        let leftP = p, rightP = p, maxLeft = 0, maxRight = 0;

        while (leftP >= 0) {
            maxLeft = Math.max(maxLeft, height[leftP]);
            leftP--;
        }

        while (rightP < height.length) {
            maxRight = Math.max(maxRight, height[rightP]);
            rightP++;
        }

        const currentWater = Math.min(maxLeft, maxRight) - height[p];

        if (currentWater >= 0) {
            totalWater += currentWater;
        }
    }

    return totalWater;
};

console.log(trap2(height2))


//we calculate water or change max
// T - O(n) 
// S - O(1)
const h = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]

var trap = function (height) {
    let left = 0, right = height.length - 1, totalWater = 0, maxLeft = 0, maxRight = 0;

    while (left < right) {
        if (height[left] <= height[right]) {
            if (height[left] >= maxLeft) {
                maxLeft = height[left]
            } else {
                totalWater += maxLeft - height[left];
            }
            left++;
        } else {
            if (height[right] >= maxRight) {
                maxRight = height[right];
            } else {
                totalWater += maxRight - height[right];
            }
            right--;
        }
    }

    return totalWater;
};

console.log(trap(h))

/*
//my_sol
//Do we calculate water or move max

const h = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]

var trap = function (height) {
    let totalWater = 0, maxLeft = 0, maxRight = 0, left = 0, right = height.length - 1;
    while (left < right) {
        if (height[left] <= height[right]) {
            if (height[left] < maxLeft) {
                let curentwater = maxLeft - height[left]
                if (curentwater >= 0) {
                    totalWater = totalWater + curentwater
                    left++
                }
            } else {
                maxLeft = height[left]
                left++
            }

        } else {
            if (height[right] < maxRight) {
                let curentwater = maxRight - height[right]
                if (curentwater >= 0) {
                    totalWater = totalWater + curentwater
                    right--
                }

            } else {
                maxRight = height[right]
                right--
            }

        }

    }

    return totalWater;
};

console.log(trap(h))
 */



/*
//my_sol
h = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]
var trap = function (height) {
    let total = 0
    for (let i = 0; i < height.length; i++) {
        let leftp = i - 1, rightp = i + 1, maxl = 0, maxr = 0;
        while (leftp >= 0) {
            maxl = Math.max(maxl, height[leftp])
            leftp--
        }
        while (rightp < height.length) {
            maxr = Math.max(maxr, height[rightp])
            rightp++
        }
        let currentwater = Math.min(maxl, maxr) - height[i]
        if (currentwater >= 0) {
            total = total + currentwater
        }
    }

    return total
};


console.log(trap(h)) */