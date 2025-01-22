/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // Early return for edge cases
    if (nums.length === 3)
        return (nums[0] + nums[1] + nums[2]) === 0 ? [nums] : [];

    // Sorting array first for two pointers method
    nums.sort((a, b) => a - b)
    const ans = []
    for (let i = 0; i < nums.length - 2; i++) {
        // Early check for duplicate
        if (i > 0 && nums[i] === nums[i - 1])
            continue;

        let left = i + 1;
        let right = nums.length - 1;
        let diff = -nums[i]

        while (left < right) {
            if (nums[left] + nums[right] == diff) {
                ans.push([nums[i], nums[left], nums[right]])

                // only updating 1 pointer because will be checked again by outer conditions 
                left++;
                // if value of current pointer index the same as pointer-1 index, then increase pointer again
                while (left < right && nums[left] == nums[left - 1])
                    left++;
            } else if (nums[left] + nums[right] < diff) {
                left++;
            } else {
                right--;
            }

        }

    }
    return ans;
};