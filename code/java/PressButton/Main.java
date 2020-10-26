public class Main {
    public static void main(String[] args) {
        Button btn1 = new Button("My button");
        Button btn2 = new Button();        
        btn1.press();
        if(btn1.isPressed()) {
            System.out.printf("%s is pressed.\n", btn1.label);
        } 
        btn2.press();
        if(btn2.isPressed()) {
            System.out.printf("%s is pressed.\n", btn2.label);
        } 
        btn2.release();
        if(! btn2.isPressed()) {
            System.out.printf("%s is not pressed.\n", btn2.label);
        }
    }
}