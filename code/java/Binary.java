import java.util.Scanner;

public class Binary {
    public static void main(String[] args) {
        Scanner myScanner = new Scanner(System.in);
        System.out.println("Your number:");
        int num = myScanner.nextInt();
        String result = "";
        while(num >0){
            result = num%2+result;
            num /= 2;
        }
        System.out.println(result);
    }
}