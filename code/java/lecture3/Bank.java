public class Bank {
    String name;
    int amount;

    Bank (String name, int amount) {
        this.name = name;
        this.amount = amount;
    }

    void deposit (int money) {
        this.amount += money;
    }

    void withdrawal (int money) {
        this.amount -= money;
    }

    void transfer (Bank b, int money) {
        this.amount -= money;
        b.amount += money;
    }

    int balanceCheck () {
        return this.amount;
    }
}
