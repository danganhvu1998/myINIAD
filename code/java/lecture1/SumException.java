import java.util.Scanner; 
import java.lang.NumberFormatException;

public class SumException {
    public static void main(String[] args) {
        try {
            System.out.println("Input two numbers");

            Scanner myScanner = new Scanner(System.in);
            String inputted_x = myScanner.nextLine();
            String inputted_y = myScanner.nextLine();

            int x = Integer.valueOf(inputted_x);
            int y = Integer.valueOf(inputted_y);
            int sum = x + y;
            System.out.println(inputted_x + " plus " + inputted_y + " = " + sum);
            
        } catch (NumberFormatException ex) {
            System.out.println("Please input integer");
        } finally {
            System.out.println("Finished");
        }
    }
}
