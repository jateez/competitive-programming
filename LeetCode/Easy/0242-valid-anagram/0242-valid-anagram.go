func isAnagram(s string, t string) bool {
    if len(s) != len(t) {
        return false
    }   

    m := map[rune]int{}
    for _, c := range s {
        m[rune(c)]++ 
    }
    for _, c := range t {
        if m[rune(c)] == 0 {
            return false
        }
        m[rune(c)]--
    }

    return true
}