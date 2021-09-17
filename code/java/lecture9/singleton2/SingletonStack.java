package sample9.singleton2;

public class SingletonStack {
    private static SingletonStack instance = new SingletonStack();

    private String array[] = new String[100];
    private int top = 0;

    private SingletonStack() {
    }

    public static SingletonStack getInstance() {
        return instance;
    }

    public void push(String str) {
        if(top == 100) {
            return;
        }
        array[top] = str;
        top++;
    }

    public String pop() {
        if(top == 0) {
            return null;
        }
        top--;
        return array[top];
    }
}