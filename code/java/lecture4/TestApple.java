import fruit.Apple;

public class TestApple {
    public static void main(String... args) {
        Apple apple1 = new Apple();
        Apple apple2 = new Apple();

        apple1.peel();
        apple2.peel();

        System.out.println("Apple 1: " + apple1.getState());
        
        System.out.println("Apple 2: " + apple2.getState());
    }
}
