package assignment1;

public class Pyramid extends Figure{
    public Pyramid(int height) {
        super(height);
    }

    @Override
    void draw () {
        int i, j;
        for (i=0; i<height; i++) {
            for (j=0; j<height-i; j++) {
                System.out.printf(" ");
            }
            for (j=0; j<=2*i; j++) {
                System.out.printf("*");
            }
            System.out.println();
        }
    }
}
