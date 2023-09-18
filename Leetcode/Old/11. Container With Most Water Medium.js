/* Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container. */
/*
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case,
the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1

Example 3:

Input: height = [4,3,2,1,4]
Output: 16

Example 4:

Input: height = [1,2,1]
Output: 2

Constraints:

    n = height.length
    2 <= n <= 3 * 10^4
    0 <= height[i] <= 3 * 10^4
 */

// T - O(n^2)
// S - O(1)
const heightArray2 = [4, 8, 1, 2, 3, 9]

var maxArea2 = function (height) {

    let maxArea = 0;

    for (let p1 = 0; p1 < height.length; p1++) {
        for (let p2 = p1 + 1; p2 < height.length; p2++) {
            const len = Math.min(height[p1], height[p2]);
            const width = p2 - p1;
            const area = len * width;
            maxArea = Math.max(maxArea, area);
        }
    };

    return maxArea;
}
console.log(maxArea2(heightArray2));



//Optimal Solution
//Two Shifting pointers technique
//outcome is impacted by lesser value of a,b, move smaller value to see if it can give bigger area
// T - O(n)
// S - O(1)
const heightArray = [4, 8, 1, 2, 3, 9]

const getMaxWaterContainer = function (height) {
    let p1 = 0, p2 = height.length - 1, maxArea = 0;

    while (p1 < p2) {
        const len = Math.min(height[p1], height[p2]);
        const width = p2 - p1;
        const area = len * width;
        maxArea = Math.max(maxArea, area);

        if (height[p1] <= height[p2]) {
            p1++;
        } else {
            p2--;
        }
    }

    return maxArea;
}

console.log(getMaxWaterContainer(heightArray));




/* //my_sol
const heightArray = [4, 3, 2, 1, 4]

var maxArea = function (height) {
    let a = 0
    let b = height.length - 1
    let max_area = 0;
    while (true) {
        let len = Math.min(height[a], height[b]);
        let width = b - a;
        let area = len * width;
        max_area = Math.max(max_area, area);
        if (len === height[a]) {
            a++
        } else {
            b--
        }

        if (a >= b) {
            break
        }

    }

    return max_area;
}
console.log(maxArea(heightArray));
 */