package geometry;

public class Rhombus extends Figure{
    final int diagonal;

    public Rhombus (int height, int diagonal) {
        super(height);
        this.diagonal = diagonal;
    }

    @Override
    public double getArea() {
        return (height * diagonal)/2;
    }
}
