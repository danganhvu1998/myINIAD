package cart;

public abstract class Product {
    protected String name;
    protected double price;

    public String getName() {
        return this.name;
    }

    public double getPrice() {
        return this.price;
    }

    abstract public double getTaxIncludedPrice();
}
