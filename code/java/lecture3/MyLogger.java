import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class MyLogger {
    private final File file;
    private int cnt = 0;
    private static int instances = 0;

    public MyLogger(String file){
        if(instances < 3){
            this.file = new File(file);;
            instances++;
        }
        else{
            throw new UnsupportedOperationException("Invalid operation");
        }
    }

    public void write (String str) {
        try {
            FileWriter myWriter = new FileWriter(this.file, true);
            myWriter.write(str);
            myWriter.write("\n");
            myWriter.write("\n");
            myWriter.close();
            cnt++;
        } catch (IOException e) {
            System.out.println("Error");
        }
    }
    public int count () {
        return cnt;
    }
}
