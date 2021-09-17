public class Main {
    public static void main(String[] args) {
        NameCard n1 = new NameCard("Taro", "Yamada");
        NameCard n2 = new NameCard("Jiro", "Tanaka");
        System.out.println(n1.getLabel());
        System.out.println(n2.getLabel());
    }
}