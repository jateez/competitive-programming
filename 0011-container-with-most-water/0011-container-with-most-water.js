/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

    // if (height.length === 2) {
    //     return Math.max(height[0], height[1]) * 1
    // }

    let right = height.length - 1, left = 0, currMaxAmount = 0;

    while (left < right) {
        let w = right - left;
        let h = Math.min(height[left], height[right]);
        let area = w * h;

        currMaxAmount = Math.max(area, currMaxAmount);

        if (height[left] > height[right])
            right--;
        else
            left++;
    }

    return currMaxAmount;
};