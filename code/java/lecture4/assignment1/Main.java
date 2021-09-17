package assignment1;

public class Main {
    public static void main(String[] args) {
        Figure f = new Figure(4);
        Pyramid p = new Pyramid(4);
        Rectangle r = new Rectangle(4, 6);
        Square s = new Square(10);
        System.out.printf("Figure: %d\n", f.height);
        f.draw();
        System.out.printf("Pyramid: %d\n", p.height);
        p.draw();
        System.out.printf("Rectangle: %d x %d\n", r.width, r.height);
        r.draw();
        System.out.printf("Square: %d x %d\n", s.width, s.height);
        s.draw();
    }
}
