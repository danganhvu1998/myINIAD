package calculation;

public interface Calc {
    static int value = 1;
    
    abstract int add(int input_value);

    abstract int mul(int input_value);
}
