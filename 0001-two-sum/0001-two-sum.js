/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let left = 0;
    let right = 1;

    while (left < right) {
        right = left + 1;
        while (right < nums.length) {
            if (target - nums[left] == nums[right]) {
                return [left, right]
            }
            right++;
        }
        left++;
    }
    return [];
};