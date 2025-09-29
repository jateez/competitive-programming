func trap(height []int) int {
	left := 0
	right := len(height) - 1
	leftWall := height[left]
	rightWall := height[right]
	currSum := 0

	for left < right {
		if height[left] < height[right] {
            leftWall = max(leftWall, height[left])
            currSum += leftWall - height[left]
            left++
		} else {
			rightWall = max(rightWall, height[right])
            currSum += rightWall - height[right]
            right--
		}
	}
	return currSum
}