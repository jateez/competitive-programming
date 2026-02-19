/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0, right = height.length - 1
    let maxArea = 0
    while (left < right) {
        let currArea = Math.min(height[right], height[left]) * (right - left)
        maxArea = Math.max(maxArea, currArea)
        if (height[right] > height[left]) {
            left++
        } else {
            right--
        }
    }
    return maxArea
};