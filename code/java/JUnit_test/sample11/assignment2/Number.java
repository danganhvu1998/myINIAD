package sample11.assignment2;

public class Number extends Expression{
    private float value;

    public Number(float value) {
        this.value = value;
    }

    public float eval() {
        return value;
    }
}

