import fruit.Apple;
import fruit.Durian;
import fruit.Orange;

public class TestFruits {
    public static void main(String... args) {
        Orange orange = new Orange();
        Apple apple = new Apple();
        Durian durian = new Durian();

        System.out.println("Before:");
        System.out.println("Orange: " + orange.getState());
        System.out.println("Apple: " + apple.getState());
        System.out.println("Durian: " + durian.getState());

        orange.peel();
        apple.peel();
        durian.peel();

        System.out.println("After:");
        System.out.println("Orange: " + orange.getState());
        System.out.println("Apple: " + apple.getState());
        System.out.println("Durian: " + durian.getState());

    }
}
