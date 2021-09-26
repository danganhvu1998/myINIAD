package important_syntax;
import java.lang.StringBuffer;
import java.util.Scanner;
import java.io.*;
  

public class WriteTStringBufferAndWriteToFileoFile {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer();
        Scanner myScanner = new Scanner(System.in);
        while(true){
            String newLine = myScanner.nextLine();
            if( newLine.length() == 0 ) break;
            sb.append(newLine+'\n');
        }
        System.out.println(sb);
        String result = sb.toString();
        write(result);
    }

    public static void write(String str) {
        try {
            File file = new File("result.txt");
            FileWriter writer = new FileWriter(file, true);
            writer.write(str);
            writer.close();
        } catch(IOException e) {
            System.out.println("An error occurs.");
        }
    }
}
