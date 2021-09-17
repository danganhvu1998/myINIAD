package cart;

public class FreshFood extends Product{
    private double tax;
    public FreshFood(String name, double price) {
        this.name = name;
        this.price = price;
    }

    @Override
    public double getTaxIncludedPrice() {
        return price + tax;
    }
}
