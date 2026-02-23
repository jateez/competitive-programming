/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    strs.sort()
    let ans = ""
    const firstWord = strs[0], lastWord = strs[strs.length - 1]
    for (let i = 0; i < Math.min(firstWord.length, lastWord.length); i++) {
        if (firstWord[i] !== lastWord[i]) {
            return ans
        } else {
            ans += firstWord[i]
        }
    }
    return ans
};