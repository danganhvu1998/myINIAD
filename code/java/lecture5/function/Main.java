package function;

public class Main {
    public static void main (String... args) {
        Function myFunction = new Factorial();
        System.out.println("Factorial: " + myFunction.evaluate(5));
    }
}
