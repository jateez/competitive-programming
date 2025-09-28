func isPalindrome(s string) bool {
	re := regexp.MustCompile("[^a-zA-Z0-9]")
	str := strings.ToLower(re.ReplaceAllString(s, ""))
	left := 0
	right := len(str) - 1

	for left < right {
		if str[left] != str[right] {
			return false
		}
		left++
		right--
	}

	return true
}