

import java.util.Random;

public class PyramidActivity extends Activity{
    protected void onStart() {
        System.out.println("PyramidActivity starts.");
        init();
    }

    protected void onStop() {
        System.out.println("PyramidActivity stops.");
    }
    
    protected void onInput(String input) {
        try {
            int inputNumber = Integer.parseInt(input);
            for(int i = 0; i < inputNumber; i++) {
                for(int j = 0; j < inputNumber - i; j++) {
                    System.out.print(" ");
                }
                for(int j = 0; j < i; j++) {
                    System.out.print("##");
                }
                System.out.println();
            }
        } catch (NumberFormatException e) {
            System.out.println("Input a number.");
        }
    }

    private void init() {
        return;
    }
}
