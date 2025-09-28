func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	m := map[rune]int{}

	for _, char := range s {
		m[char] = m[char] + 1
	}

	for _, char := range t {
		val, ok := m[char]
		if !ok {
			return false
		}
		if (val - 1) < 0 {
			return false
		}

		m[char] = val - 1
	}

	return true
}