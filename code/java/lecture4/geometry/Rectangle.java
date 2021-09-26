package geometry;

public class Rectangle extends Figure{
    final int width;

    public Rectangle(int height, int width) {
        super(height);
        this.width = width;
    }

    @Override
    public double getArea() {
        return height * width;
    }
}
