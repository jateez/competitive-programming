class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> numberSt = new Stack<>();

        for (int i = 0; i < tokens.length; i++) {
            String token = tokens[i];
            int num1;
            int num2;
            switch (token) {
                case "+":
                    num1 = numberSt.pop();
                    num2 = numberSt.pop();
                    numberSt.push(num1 + num2);
                    break;
                case "-":
                    num1 = numberSt.pop();
                    num2 = numberSt.pop();
                    numberSt.push(num2 - num1);
                    break;
                case "*":
                    num1 = numberSt.pop();
                    num2 = numberSt.pop();
                    numberSt.push(num1 * num2);
                    break;
                case "/":
                    num1 = numberSt.pop();
                    num2 = numberSt.pop();
                    numberSt.push(num2 / num1);
                    break;
                default:
                    numberSt.push(Integer.parseInt(token));
                    break;
            }
        }
        return numberSt.pop();
    }
}