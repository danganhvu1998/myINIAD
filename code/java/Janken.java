import java.util.Random;
import java.util.Scanner;

public class Janken {
    public static void main(String[] args) {
        Scanner myScanner = new Scanner(System.in);
        Random r = new Random();
        String result;
        System.out.println("Your choise:");
        int user = myScanner.nextInt();
        int comp = r.nextInt(3);
        System.out.println("Comp: "+ comp);
        if( ((user+1)%3)==comp ) {
            result = "User win";
        } else if( ((user+2)%3)==comp ) {
            result = "Computer win";
        } else result = "Tie";
        System.out.println(result);
    }
}