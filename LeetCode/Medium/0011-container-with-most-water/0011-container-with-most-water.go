func maxArea(height []int) int {
	left := 0
	right := len(height) - 1
	currMaxArea := 0
	for left < right {
		temp := (right - left) * (min(height[left], height[right]))
		currMaxArea = max(currMaxArea, temp)
		if height[left] > height[right] {
			right--
		} else {
			left++
		}
	}
	return currMaxArea
}