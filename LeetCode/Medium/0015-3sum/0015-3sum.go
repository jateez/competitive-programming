func threeSum(nums []int) [][]int {
	s := [][]int{}
	sort.Ints(nums)

	for i, num := range nums {
		left := i + 1
		right := len(nums) - 1
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		for left < right {
			sum := num + nums[left] + nums[right]
			if sum > 0 {
				right--
			} else if sum < 0 {
				left++
			} else {
				s = append(s, []int{num, nums[left], nums[right]})
				left++
				right--
				for left < right && nums[left] == nums[left-1] {
					left++
				}
			}
		}
	}

	return s
}