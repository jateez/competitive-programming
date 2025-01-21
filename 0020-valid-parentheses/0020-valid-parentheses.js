/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 == 1)
        return false

    let stack = []
    const bracketMap = {
        "]": "[",
        "}": "{",
        ")": "("
    }
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "[":
            case "{":
            case "(":
                stack.push(s[i])
                break;
            default:
                if (stack.pop() != bracketMap[s[i]])
                    return false;
                break;
        }
    }
    return stack.length == 0;
};