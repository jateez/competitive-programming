/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const ans = new Map();
    ans.set(nums[0], 0)
    for (let i = 1; i < nums.length; i++) {
        if (ans.has(nums[i]))
            return true;
        ans.set(nums[i], i);
    }
    return false;
};