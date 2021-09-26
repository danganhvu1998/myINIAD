package geometry;

public class Trapezoid extends Figure{
    final int long_base, short_base;

    public Trapezoid(int height, int long_base, int short_base) {
        super(height);
        this.long_base = long_base;
        this.short_base = short_base;
    }

    @Override
    public double getArea() {
        return height * (short_base + long_base)/2;
    }
}
