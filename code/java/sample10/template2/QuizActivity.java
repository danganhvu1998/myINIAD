

import java.util.Random;

public class QuizActivity extends Activity{
    private Random random = new Random();
    private int number = 0;
    private int cnt = 0;

    protected void onStart() {
        System.out.println("QuizActivity starts.");
        init();
    }

    protected void onStop() {
        System.out.println("QuizActivity stops.");
    }
    
    protected void onInput(String input) {
        try {
            cnt++;
            int inputNumber = Integer.parseInt(input);
            if(inputNumber > number) {
                System.out.println("Too large.");
            } else if(inputNumber < number) {
                System.out.println("Too small.");
            } else {
                System.out.printf("Correct answer: %d challenges\n", cnt);

                init();
            }
        } catch (NumberFormatException e) {
            System.out.println("Input a number.");
        }
    }

    private void init() {
        number = random.nextInt(100);
        cnt = 0;
        System.out.println("Guess the number (0~99).");
    }
}
