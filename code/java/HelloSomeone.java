import java.util.Scanner;

public class HelloSomeone {
    public static void main(String[] args) {
        Scanner myScanner = new Scanner(System.in);
        System.out.println("What's your name");
        String inputted = myScanner.nextLine();
        System.out.println("Hello "+ inputted);
    }
}