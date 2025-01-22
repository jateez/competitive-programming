/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const ans = new Map();
    ans.set(nums[0], 0);
    for (let i = 1; i < nums.length; i++) {
        if (ans.has(target - nums[i])) {
            return [i, ans.get(target - nums[i])];
        }
        ans.set(nums[i], i)
    }
    return [];
};