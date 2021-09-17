package assignment1;

public class Square extends Rectangle{
    public Square(int height){
        super(height,height);
    }

    @Override
    void draw () {
        for (int i=0; i<height; i++) {
            for (int j=0; j<height; j++) {
                System.out.printf("*");
            }
            System.out.println();
        }
    }
}
