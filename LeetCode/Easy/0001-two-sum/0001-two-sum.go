func twoSum(nums []int, target int) []int {

	if len(nums) == 2 {
		return []int{0, 1}
	}
	m := map[int]int{}
	for i, num := range nums {
		val, ok := m[(target - num)]
		if ok {
			return []int{val, i}
		}
		m[num] = i
	}
	return []int{0, 0}
}