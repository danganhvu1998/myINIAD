package sample11.assignment2;

import java.util.ArrayList;

public class Operator extends Expression {
    private String operator;
    private ArrayList<Expression> children = new ArrayList<Expression>();

    public Operator(String operator) {
        this.operator = operator;
    }

    public void add(Expression e) {
        children.add(e);
    }

    public Expression getChild(int i) {
        return children.get(i);
    }

    public float eval() {
        if (children.size() != 2) {
            throw new UnsupportedOperationException();
        }

        float left = children.get(0).eval();
        float right = children.get(1).eval();
        switch (operator) {
            case "+":
                return left + right;

            case "-":
                return left - right;

            case "*":
                return left * right;

            case "/":
                return left / right;

            default:
                throw new UnsupportedOperationException();
        }
    }
}

