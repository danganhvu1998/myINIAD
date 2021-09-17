package sample9.observer3;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;

public class FileObserver implements Observer {
    private static File file;
    public FileObserver(File file) {
        this.file = file;
    }

    public void update(InputScanner scanner) {
        String lastLine = scanner.getLastInput();
        try {
            FileWriter writer = new FileWriter(file, true);
            writer.write(String.format("[%s] %s\n", LocalDateTime.now().toString(), lastLine));
            writer.close();
        } catch (IOException e) {
    	    e.printStackTrace();
    	}
    }
}