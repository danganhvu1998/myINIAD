package sample9.singleton3;

public class Seller extends User {
    private String shopName;

    public Seller(String name, String shopName) {
        super(name);
        this.shopName = shopName;
    }

    public void transfer(int amount) {
        balance += amount;
        ConsoleLogger.getInstance().balance(this);
    }

    public String getName() {
        return String.format("%s(%s)", shopName, name);
    }
}