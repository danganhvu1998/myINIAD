import java.io.*;

public class FileWrite {
    public static void main(String[] args) {
        write("Hello INIAD");
    }

    public static void write(String str) {
        try {
            File file = new File("samle.txt");
            FileWriter writer = new FileWriter(file, true);
            writer.write(str);
            writer.close();
        } catch(IOException e) {
            System.out.println("An error occurs.");
        }
    }
}
