/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const numbers = []

    for (let i = 0; i < tokens.length; i++) {
        let num1, num2;
        let token = tokens[i]

        switch (token) {
            case "+":
                num1 = numbers.pop()
                num2 = numbers.pop()
                numbers.push(num2 + num1)
                break;
            case "-":
                num1 = numbers.pop()
                num2 = numbers.pop()
                numbers.push(num2 - num1)
                break;
            case "/":
                num1 = numbers.pop()
                num2 = numbers.pop()
                numbers.push(Math.trunc(num2 / num1))
                break;
            case "*":
                num1 = numbers.pop()
                num2 = numbers.pop()
                numbers.push(num2 * num1)
                break;
            default:
                numbers.push(parseInt(token))
                break;
        }
    }
    return numbers.pop()
};