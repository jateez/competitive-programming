/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let leftWall = height[0];
    let rightWall = height[height.length - 1];
    let left = 0;
    let right = height.length - 1;
    let sumAmount = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            leftWall = Math.max(height[left], leftWall)
            sumAmount += leftWall - height[left];
            left++;
        } else {
            rightWall = Math.max(height[right], rightWall)
            sumAmount += rightWall - height[right]
            right--;
        }
    }
    return sumAmount;
};