package sample9.singleton3;

public interface Logger {
    public void purchase(Customer customer, Item item);
    public void balance(User user);
    public void error(User user, String error);
}