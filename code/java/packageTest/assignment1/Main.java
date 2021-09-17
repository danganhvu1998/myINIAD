package assignment1;
import assignment1.figures.*;

public class Main {
    public static void main(String[] args) {
        Pyramid p = new Pyramid(4);
        Rectangle r = new Rectangle(4, 6);
        Square s = new Square(10);
        p.draw();
        r.draw();
        s.draw();
    }
}