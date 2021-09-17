

public class EchoActivity extends Activity{
    protected void onStart() {
        System.out.println("EchoActivity starts.");
    }

    protected void onStop() {
        System.out.println("EchoActivity stops.");
    }
    
    protected void onInput(String input) {
        System.out.printf("Your input: %s\n", input);
    }
}
