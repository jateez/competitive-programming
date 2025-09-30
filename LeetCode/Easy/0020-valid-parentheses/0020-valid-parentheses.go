func isValid(s string) bool {
	stack := []string{}
	m := map[string]string{
		"]": "[",
		"}": "{",
		")": "(",
	}

	for i := 0; i < len(s); i++ {
		if string(s[i]) == "(" || string(s[i]) == "[" || string(s[i]) == "{" {
			stack = append(stack, string(s[i]))
			continue
		}
		if len(stack) == 0 {
			return false
		}
		c := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		if m[string(s[i])] != string(c) {
			return false
		}
	}
	return len(stack) == 0
}