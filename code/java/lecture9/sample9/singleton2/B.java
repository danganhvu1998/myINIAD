package sample9.singleton2;

public class B {
    public B() {
    }

    public void execute() {
        SingletonStack stack = SingletonStack.getInstance();
        for(;;) {
            String str = stack.pop();
            if(str == null) {
                break;
            }
            System.out.println(str);
        }        
    }
}