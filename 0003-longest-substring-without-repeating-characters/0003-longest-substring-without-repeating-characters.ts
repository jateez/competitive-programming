function lengthOfLongestSubstring(s: string): number {

    if (s.length <= 1) return s.length
    let currLen = 0;
    let maxLen = 0;
    let i = 0;
    let start = 0;
    const map = new Map();


    while (i < s.length) {
        if (map.has(s[i])) {
            start = Math.max(start, map.get(s[i]) + 1)
            map.set(s[i], i)
            currLen = i - start + 1;
            maxLen = Math.max(maxLen, currLen)

        } else {
            map.set(s[i], i)
            currLen = i - start + 1;
            maxLen = Math.max(maxLen, currLen)
        }
        i++;
    }
    return maxLen;
};