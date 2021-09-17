import java.util.Scanner;

public class Binary {
    public static void main(String[] args) {
        int binary[] = new int[40];
        Scanner myScanner = new Scanner(System.in);
        int x = myScanner.nextInt();
        int index = 0;
        while(x > 0) {
            binary[index++] = x % 2;
            x = x / 2;
        }
        for(int i = index-1; i>=0; i--) {
            System.out.print(binary[i]);
        }
        System.out.println();
    }
}
