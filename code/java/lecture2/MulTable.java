import java.util.Scanner;

public class MulTable {
    public static void main(String[] args)
    {
        int n;
        System.out.print("Input the number: ");
        Scanner scanner = new Scanner(System.in);
        n = scanner.nextInt();
        for(int i=0; i<10; i++) {
            System.out.println(n +"*" + i + "=" +n*i);
        }
    }
}
