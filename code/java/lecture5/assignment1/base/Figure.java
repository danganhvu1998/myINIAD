package assignment1.base;

public abstract class Figure {
    protected int height;

    public Figure(int height) {
        this.height = height;
    }

    abstract public String draw();
}
