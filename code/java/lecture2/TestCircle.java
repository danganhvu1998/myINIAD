public class TestCircle {
    public static void main(String args[]) {
        // The first one
        Circle c1 = new Circle();
        c1.radius = 5.0;
        c1.color = "green";
        c1.pointX = 5;
        c1.pointY = 10;

        // The second one
        Circle c2 = new Circle();
        c2.radius = 3.0;
        c2.color = "yellow";
        c2.pointX = -3;
        c2.pointY = 5;

        double c1Area = c1.getArea();
        System.out.println(c1Area);

        double c2Circumference = c2.getCircumference();
        System.out.println(c2Circumference);

        double distance = c1.getDistance(c2);
        System.out.println(distance);
    }
}
