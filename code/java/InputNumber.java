import java.util.InputMismatchException;
import java.util.Scanner;

public class InputNumber     {
    public static void main(String[] args) {
        try {
            Scanner myScanner = new Scanner(System.in);
            System.out.println("Input two numbers:");
            int a = myScanner.nextInt();
            int b = myScanner.nextInt();
            System.out.println(a + " plus " + b + " = " + (a+b));       
        } catch (InputMismatchException error) {
            System.out.println("Please input only integer");       
        } finally {
            System.out.println("Finished");       
        }
    }
}