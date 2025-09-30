func trap(height []int) int {
	maxWater := 0
	left := 0
	right := len(height) - 1
	leftWall := height[left]
	rightWall := height[right]

	for left < right {
		if height[left] < height[right] {
			leftWall = max(leftWall, height[left])
			maxWater += leftWall - height[left]
			left++
		} else {
			rightWall = max(rightWall, height[right])
			maxWater += rightWall - height[right]
			right--
		}
	}
	return maxWater
}