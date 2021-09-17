package sample9.singleton1;

public class SimpleStack {
    private String array[] = new String[100];
    private int top = 0;

    public SimpleStack() {
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