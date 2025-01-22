/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    const answer = Array(nums.length).fill(1);

    let left = 1;
    for (let i = 0; i < answer.length; i++) {
        answer[i] = left;
        left *= nums[i]
    }

    let right = 1;
    for (let i = answer.length - 1; i >= 0; i--) {
        answer[i] *= right;
        right *= nums[i]
    }

    return answer;


};