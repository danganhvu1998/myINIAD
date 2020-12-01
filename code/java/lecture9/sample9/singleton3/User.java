package sample9.singleton3;

abstract public class User {
    protected String name;
    protected int balance = 0;

    public User(String name) {
        this.name = name;
    }
    
    public void charge(int amount) {
        balance += amount;

        ConsoleLogger.getInstance().balance(this);
    }

    public int getBalance() {
        return balance;
    }

    abstract public String getName();
}