func maxArea(height []int) int {
	/**
	  1.  calculate current area size by seeking
	      lowest wall for left and right side multilply with distance
	  2.  Check if curr area > previous area, if yes update
	  3. continue increment left current left wall is
	      higher than right wall, if not, otherwise
	*/

	left := 0
	right := len(height) - 1
	currAmount := float64(0)

	for left < right {
		temp := float64(right-left) * math.Min(float64(height[left]), float64(height[right]))
		currAmount = math.Max(currAmount, temp)
		if height[left] > height[right] {
			right--
		} else {
			left++
		}
	}
	return int(currAmount)
}