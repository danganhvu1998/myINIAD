public class Area {
    public static void main(String[] args) {
        int radius = (int)(Math.random() * (9 - 0 + 1) + 0);
        double area =  Math.PI * (radius * radius);;
        System.out.println("The area of a circle with a radius of " + radius + " is " + area);
    }
}
