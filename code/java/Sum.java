import java.util.Scanner;

public class Sum {
    public static void main(String[] args) {
        Scanner myScanner = new Scanner(System.in);
        System.out.println("Input two numbers:");
        int a = Integer.valueOf(myScanner.nextLine());
        int b = Integer.valueOf(myScanner.nextLine());
        System.out.println(a + " plus" + b + " = " + (a+b));
    }
}