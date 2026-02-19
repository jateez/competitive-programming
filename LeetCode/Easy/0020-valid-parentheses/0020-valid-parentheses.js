/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const obj = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    const arr = []

    for (let i = 0; i < s.length; i++) {
        if (!obj.hasOwnProperty(s[i])) {
            arr.push(s[i])
            continue
        }
        else if (obj[s[i]] !== arr.pop()) {
            return false
        }
    }
    return arr.length == 0
};