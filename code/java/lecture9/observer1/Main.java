package sample9.observer1;

public class Main {
    public static void main(String[] args) {
        ObservableStack stack = new ObservableStack();
        MyObserver observer = new MyObserver();
        stack.addObserver(observer);

        stack.push("Design");
        stack.push("Business");
        stack.push("Engineering");
        stack.push("Civil System");
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
    }
}
