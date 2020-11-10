package assignment1;

public class Rectangle extends Figure{
    final int width;

    public Rectangle(int height, int width) {
        super(height);
        this.width = width;
    }

    @Override
    void draw () {
        for (int i=0; i<height; i++) {
            for (int j=0; j<width; j++) {
                System.out.printf("*");
            }
            System.out.println();
        }
    }
}
