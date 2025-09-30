func threeSum(nums []int) [][]int {
	sort.Ints(nums)
	ans := [][]int{}

	for i, num := range nums {
		if i > 0 && num == nums[i-1] {
			continue
		}
		left := i + 1
		right := len(nums) - 1

		for left < right {
			if nums[left]+nums[right]+num > 0 {
				right--
			} else if nums[left]+nums[right]+num < 0 {
				left++
			} else {
				ans = append(ans, []int{num, nums[left], nums[right]})
				left++
				right--
				for nums[left] == nums[left-1] && left < right {
					left++
				}
			}
		}
	}
	return ans
}
