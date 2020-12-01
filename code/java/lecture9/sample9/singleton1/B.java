package sample9.singleton1;

public class B {
    private SimpleStack stack;

    public B(SimpleStack stack) {
        this.stack = stack;
    }

    public void execute() {
        for(;;) {
            String str = stack.pop();
            if(str == null) {
                break;
            }
            System.out.println(str);
        }        
    }
}