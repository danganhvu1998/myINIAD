package sample9.singleton1;

public class A {
    private SimpleStack stack;

    public A(SimpleStack stack) {
        this.stack = stack;
    }

    public void execute() {
        for(var i = 0; i < 10; i++) {
            stack.push(Integer.toString(i));
        }        
    }
}