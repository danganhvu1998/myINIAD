package sample9.singleton1;

public class Main {
    public static void main(String[] args) {
        SimpleStack stack = new SimpleStack();
        A a = new A(stack);
        B b = new B(stack);
        a.execute();
        b.execute();
    }
}
