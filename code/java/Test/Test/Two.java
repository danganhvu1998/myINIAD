import java.util.Scanner;

public class Two {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer();
        Scanner myScanner = new Scanner(System.in);
        while (true) {
            String newLine = myScanner.nextLine();
            if (newLine.length() == 0)
                break;
            sb.append(newLine.substring(0, 1));
        }
        System.out.println(sb.toString());
    }
}
