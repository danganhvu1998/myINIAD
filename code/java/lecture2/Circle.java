public class Circle {
    double radius;
    String color;
    int pointX, pointY;

    public Circle() {
        pointX = 1;
        pointY = 1;
    }

    public Circle(int pointX, int pointY) {
        radius = 1.0;
        color = "red";
        this.pointX = pointX;
        this.pointY = pointY;

    }

    public double getArea() {
        return Math.PI * radius * radius;
    }

    public double getCircumference() {
        return Math.PI * radius * 2;
    }

    public double getDistance(Circle c2) {
        return Math.sqrt((this.pointX - c2.pointX)*(this.pointX - c2.pointX) + (this.pointY - c2.pointY)*(this.pointY - c2.pointY));
    }
}
