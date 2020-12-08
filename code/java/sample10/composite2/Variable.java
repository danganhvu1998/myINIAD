package sample10.composite2;

import java.util.Map;
import java.util.HashMap;

public class Variable extends Expression{
    private String symbol;

    public Variable(String symbol) {
        this.symbol = symbol;
    }

    public float eval(Map<String, Float> variables) {
        return variables.get(symbol);
    }
    
    public void print() {
        System.out.printf("%s", symbol);
    }
}
