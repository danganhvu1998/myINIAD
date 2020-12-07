package sample10.composite2;

import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;

public class Operator extends Expression {
    private String operator;
    private ArrayList<Expression> children = new ArrayList<Expression>();

    public Operator(String operator) {
        this.operator = operator;
    }

    public void add(Expression e) {
        children.add(e);
    }

    public float eval(Map<String, Float> variables) {
        if (children.size() != 2) {
            throw new UnsupportedOperationException();
        }
        
        float left = children.get(0).eval(variables);
        float right = children.get(1).eval(variables);
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

    public void print() {
        if (children.size() != 2) {
            throw new UnsupportedOperationException();
        }

        System.out.print("(");
        children.get(0).print();
        System.out.printf(" %s ", operator);
        children.get(1).print();
        System.out.print(")");
    }
}
