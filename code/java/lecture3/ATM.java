public class ATM {
    public static void main(String[] args) {
        Bank a = new Bank ("Alice", 100000);
        Bank b = new Bank ("Bob", 150000);
        a.deposit(20000);
        System.out.printf("Alice has %d yen\n", a.balanceCheck());
        b.withdrawal(15000);
        System.out.printf("Bob has %d yen\n", b.balanceCheck());
        System.out.printf("Alice transfers Bob 30000 yen\n");
        a.transfer(b, 30000);
        System.out.printf("Alice has %d yen\n", a.balanceCheck());
        System.out.printf("Bob has %d yen\n", b.balanceCheck());
    }
}
