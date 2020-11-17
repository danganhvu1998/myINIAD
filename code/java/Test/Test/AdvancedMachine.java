public class AdvancedMachine extends Machine {
    private static int totalPrice = 0;

    AdvancedMachine(String model, int price) {
        super(model, price);
        totalPrice += price;
    }

    public static int getTotalPrice() {
        return totalPrice;
    }

    @Override
    public int getPrice() {
        return price + price / 10;
    }
}
