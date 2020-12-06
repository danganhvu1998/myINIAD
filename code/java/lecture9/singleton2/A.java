package sample9.singleton2;

public class A {
    public A() {
    }

    public void execute() {
        SingletonStack stack = SingletonStack.getInstance();
        for(var i = 0; i < 10; i++) {
            stack.push(Integer.toString(i));
        }        
    }
}