package sample10.composite2;

import java.util.Map;
import java.util.HashMap;

abstract public class Expression {
    abstract public float eval(Map<String, Float> variables);
    abstract public void print();
}
