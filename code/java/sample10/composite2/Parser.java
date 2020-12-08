package sample10.composite2;

import java.util.Stack;

public class Parser {
    private static Parser instance = new Parser();

    private Parser() {
    }

    public static Parser getInstance() {
        return instance;
    }

    public Expression parse(String str) {
        Stack<Expression> stack = new Stack<Expression>();
        String[] tokens = str.split("\\s");
        for (String token : tokens) {
            if (token.equals("+") || token.equals("-") || token.equals("*") || token.equals("/")) {
                Operator operator = new Operator(token);
                Expression right = stack.pop();
                Expression left = stack.pop();
                operator.add(left);
                operator.add(right);
                stack.push(operator);
            } else {
                try {
                    float value = Float.parseFloat(token);
                    Number num = new Number(value);
                    stack.push(num);
                } catch (NumberFormatException e) {
                    Variable v = new Variable(token);
                    stack.push(v);
                }
            }
        }
        return stack.pop();
    }
}
