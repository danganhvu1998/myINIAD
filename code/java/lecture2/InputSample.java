import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class InputSample {
    public static void main(String[] args) throws IOException {
        // FileWriter myWriter = new FileWriter("result.txt");
        // StringBuffer sb = new StringBuffer();
        // Scanner scanner = new Scanner(System.in);
        // while(scanner.hasNextLine()) {
        //     String str = scanner.nextLine();
        //     if(str.isEmpty()){
        //         break;
        //     }
        //     sb.append(str);
        //     sb.append("\n");
        // }
        // String result = sb.toString();
        // myWriter.write(result);
        // myWriter.close();
        Scanner scanner = new Scanner(System.in);
        for (;;) {
            String str = scanner.nextLine();
            if(str.equals("")) {
                break;
            }
            System.out.println(str);
        }
    }
}
