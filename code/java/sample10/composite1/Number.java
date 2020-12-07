package sample10.composite1;

public class Number extends Expression{
    private float value;

    public Number(float value) {
        this.value = value;
    }

    public float eval() {
        return value;
    }
    
    public void print() {
        System.out.printf("%f", value);
    }
}
