/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        let diff = target - nums[i]
        let pointer = i + 1;
        while (pointer < nums.length) {
            if (nums[pointer] === diff) return [i, pointer]
            pointer++;
        }
    }
    return []
};