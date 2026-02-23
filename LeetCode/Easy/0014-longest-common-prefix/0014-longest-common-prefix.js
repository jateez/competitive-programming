/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    strs.sort()
    let ans = ""
    let firstWord = strs[0], lastWord = strs[strs.length - 1]
    for (let i = 0; i < Math.min(firstWord.length, lastWord.length); i++) {
        if (firstWord[i] !== lastWord[i]) {
            break
        } else {
            ans += firstWord[i]
        }
    }
    return ans
};