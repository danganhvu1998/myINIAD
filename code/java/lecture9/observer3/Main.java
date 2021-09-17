package sample9.observer3;

import java.io.IOException;
import java.io.File;

public class Main {
    public static void main(String[] args) throws IOException {
        InputScanner scanner = new InputScanner();
        EchoObserver observer1 = new EchoObserver();
        scanner.addObserver(observer1);

        FileObserver observer2 = new FileObserver(new File("log.txt"));
        scanner.addObserver(observer2);
        scanner.execute();
    }
}
