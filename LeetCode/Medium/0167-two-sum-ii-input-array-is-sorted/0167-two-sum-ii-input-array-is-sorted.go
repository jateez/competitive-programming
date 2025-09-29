func twoSum(numbers []int, target int) []int {
	if len(numbers) == 2 {
		return []int{1, 2}
	}
	right := len(numbers) - 1
	left := 0
	for left < right {
		if numbers[left]+numbers[right] == target {
			return []int{left + 1, right + 1}
		} else if numbers[left]+numbers[right] > target {
			right--
		} else {
			left++
		}
	}
	return []int{1, 2}
}