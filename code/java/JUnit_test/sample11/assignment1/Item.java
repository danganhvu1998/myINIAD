package sample11.assignment1;

abstract public class Item {
    private String name;
    protected int price;

    public Item(String name, int price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    abstract public int getTaxPrice();
}
