package geometry;

public class Square extends Rectangle{
    public Square(int height){
        super(height,height);
    }

    @Override
    public double getArea() {
        return height * height;
    }
}
