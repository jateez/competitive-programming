/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length == 1)
        return nums[0]

    let currSum = nums[0];
    let currMaxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > currSum + nums[i]) {
            currSum = nums[i]
        } else {
            currSum += nums[i]
        }

        if (currSum > currMaxSum)
            currMaxSum = currSum;
    }
    return currMaxSum;
};