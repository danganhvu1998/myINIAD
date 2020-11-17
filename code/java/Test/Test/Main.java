public class Main {
    public static void main(String[] args) {
        AdvancedMachine m1 = new AdvancedMachine("M367", 1000);
        AdvancedMachine m2 = new AdvancedMachine("RX231", 2000);
        System.out.println(m1.getModel());
        System.out.println(m1.getPrice());
        System.out.println(AdvancedMachine.getTotalPrice());
    }
}