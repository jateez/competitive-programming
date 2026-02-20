/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let low = 0, mid, high = nums.length - 1

    while (high >= low) {
        mid = Math.floor((high + low) / 2)
        if (nums[mid] == target) {
            return mid
        }
        if (nums[mid] > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1
};