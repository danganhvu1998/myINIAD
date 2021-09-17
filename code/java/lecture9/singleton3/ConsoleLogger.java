package sample9.singleton3;

public class ConsoleLogger implements Logger {
    private static ConsoleLogger instance = new ConsoleLogger();

    private ConsoleLogger() {
    }

    public static ConsoleLogger getInstance() {
        return instance;
    }

    public void purchase(Customer customer, Item item) {
        System.out.printf("[Purchase] %s: %s(%d yen).\n", customer.getName(), item.getName(), item.getPrice());
    }

    public void balance(User user) {
        System.out.printf("[Balance] %s: %d yen.\n", user.getName(), user.getBalance());
    }

    public void error(User user, String error) {
        System.out.printf("[Error] %s: %s.\n", user.getName(), error);
    }
}