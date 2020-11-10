import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

public class WriteToFile {
    public static void main(String[] args) throws IOException {
        var fileName = "sample.txt";
        try (var fr = new FileWriter(fileName, StandardCharsets.UTF_8)) {
            fr.write("Hello INIAD");
        }
    }
}
