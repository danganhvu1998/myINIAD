package four;

public class Main {
    public static void main(String[] args) {
        Citrus lemon = new Citrus(100, "Yello", true);
        System.out.println(lemon.getPrice());
        System.out.println(lemon.getColor());
        System.out.println(lemon.isSweet());
        System.out.println(lemon.isSour());
    }
}
