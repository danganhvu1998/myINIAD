package sample9.observer1;

public class ObservableStack extends Subject {
    private String array[] = new String[100];
    private int top = 0;

    public ObservableStack() {
    }

    public void push(String str) {
        if(top == 100) {
            return;
        }
        array[top] = str;
        top++;
        notifyObserver();
    }

    public String pop() {
        if(top == 0) {
            return null;
        }
        top--;
        notifyObserver();
        return array[top];
    }

    public String getStatus() {
        if(top == 0) {
            return "0 elements";
        }
        return String.format("%d elements (Top: %s)", top, array[top - 1]);
    }
}