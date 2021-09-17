package assignment1;

public class Figure {
    final int height;

    public Figure(int height) {
        this.height = height;
    }

    void draw() {
        for (int i=0; i< height; i++) {
            System.out.printf("\n");
        }
    }
}
