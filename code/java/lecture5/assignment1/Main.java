package assignment1;

import assignment1.figures.Pyramid;
import assignment1.figures.Rectangle;
import assignment1.figures.Square;

public class Main {
    public static void main(String[] args) {
        // Figure f = new Figure(4);
        Pyramid p = new Pyramid(4);
        Rectangle r = new Rectangle(4, 6);
        Square s = new Square(10);
        // f.draw();
        System.out.println("---");
        p.draw();
        System.out.println("---");
        r.draw();
        System.out.println("---");
        s.draw();
    }
}
