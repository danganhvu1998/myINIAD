package sample9.singleton3;

public class Customer extends User {
    public Customer(String name) {
        super(name);
    }

    public void withdraw(int amount) {
        balance -= amount;
        ConsoleLogger.getInstance().balance(this);
    }

    public String getName() {
        return name;
    }
}