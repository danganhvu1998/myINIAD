import java.util.Scanner;

public class EchoDouble {
    public static void main(String[] args) {
        Scanner myScanner = new Scanner(System.in);
        while (true) {
            String newLine = myScanner.nextLine();
            int intArg;
            try {
                intArg = Integer.parseInt(newLine);
                System.out.println(intArg * 2);
            } catch (NumberFormatException e) {
                break;
            }
        }
    }
}