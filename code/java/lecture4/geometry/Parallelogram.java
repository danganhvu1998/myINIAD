package geometry;

public class Parallelogram extends Figure {
    final int base;

    public Parallelogram (int height, int base) {
        super(height);
        this.base = base;
    }

    @Override
    public double getArea() {
        return height * base;
    }
}
