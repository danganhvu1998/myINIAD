package cart;

public class Electronic extends Product{
    private double tax;
    public Electronic(String name, double price) {
        this.name = name;
        this.price = price;
    }

    @Override
    public double getTaxIncludedPrice() {
        return price + tax;
    }
}
