package four;

abstract public class Plant {
    private int price;

    public Plant(int price) {
        this.price = price;
    }

    public int getPrice() {
        return this.price;
    }

    abstract public String getColor();
}
