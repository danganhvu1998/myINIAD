package assignment1.figures;

public class Square extends Rectangle{
    public Square(int height){
        super(height,height);
    }

    @Override
	public
    void draw () {
        for (int i=0; i<height; i++) {
            for (int j=0; j<height; j++) {
                System.out.printf("*");
            }
            System.out.println();
        }
    }
}
