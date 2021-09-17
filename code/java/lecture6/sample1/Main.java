package sample1;

public class Main {
    public static void main(String[] args) {
        // GenericsSample<String> g1 = new GenericsSample<String>("INIAD", "Toyo");
        GenericsSample<String> g1 = new GenericsSample<>("INIAD", "Toyo");
        System.out.printf("%s %s\n", g1.getFirst(), g1.getSecond());
        GenericsSample<Integer> g2 = new GenericsSample<>(Integer.valueOf(10), Integer.valueOf(20));
        System.out.printf("%d %d\n", g2.getFirst().intValue(), g2.getSecond().intValue());

        Concrete c = new Concrete();
        c.print("Hello");

        print(g1);
        print(g2);
    } 

    private static void print(GenericsSample<?> g) {
        System.out.println(g.getFirst());
        System.out.println(g.getSecond());
    }
}
